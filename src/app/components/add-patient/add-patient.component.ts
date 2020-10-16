import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {
@ViewChild('userForm') userForm : HTMLFormElement;
  patientId = this.route.snapshot.paramMap.get('id');
  editMode : boolean = false;
  patientData = {}  
  constructor(private api: ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.patientId, 'id');
    
    if(this.patientId){
      this.editMode = true;
      this.getSpecificPatient();
    }


  }

  getSpecificPatient(){
    this.api.getSpecificPatients(this.patientId).subscribe(res=>{
      this.patientData = res['data']
      
    })
  }

  addPatient(form){
    if(this.editMode){
      this.editPatient(form);
      return
    }
    this.api.addPatient(form).subscribe(res=>{
    setTimeout(re=>{
      this.router.navigate(['admin'])
    }, 2200)
    this.api.successMessage('تم تسجيل بيانات المريض بنجاح');
    },err=>{
      // console.log(err);
      
    },
    () => {

    }
    )
  }

  editPatient(form){
    form.patient_id = this.patientId;
    this.api.editPatient(form).subscribe(res=>{
      setTimeout(re=>{
        this.router.navigate(['admin'])
      }, 2200)
      this.api.successMessage('تم تعديل بيانات المريض بنجاح');
      },err=>{
        // console.log(err);
        
      },
      () => {
  
      }
      )
  }
}
