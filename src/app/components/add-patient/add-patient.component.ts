import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {
@ViewChild('userForm') userForm : HTMLFormElement;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  addPatient(form){
    this.api.addPatient(form).subscribe(res=>{
      
    this.api.successMessage('تم تسجيل بيانات المريض بنجاح').afterDismissed()
    .subscribe(res=>{
      this.userForm.reset()
    })

    },err=>{
      console.log(err);
      
    },
    () => {

    }
    )
    
  }
}
