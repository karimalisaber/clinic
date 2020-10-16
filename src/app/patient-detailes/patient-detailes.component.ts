import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AssetsService } from '../services/assets.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../services/api.service';

@Component({
  selector: 'app-patient-detailes',
  templateUrl: './patient-detailes.component.html',
  styleUrls: ['./patient-detailes.component.scss']
})
export class PatientDetailesComponent implements OnInit {
  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router ) { }
  patientId = this.route.snapshot.paramMap.get('id')
  type = +this.route.snapshot.paramMap.get('type') // 0 from patient details
  
  role = +localStorage['role']  
  patientData = {
    patient_id: this.patientId,
    complaint: '',
    examination: '',
    diagnosis:'',
    investigation: '',
    treamtent: '',
    reseen: '', 
    hn: '',
    hrt: '',
    nose: '',
    phnx:'',
    chest: '',
    gentalia: '',
    abd: '',
    other: '',
    relation_type: '',
    mather_name: '',
    father_name: '',
    father_age: '',
    address: '',
    phone:'',
    age: '',
    number_of_births: '',
    mather_job: '',
    mather_age: '',
    father_job: '',
    name: '',
    diagnoses: [],
    note:'',
    date: ''
  }
  
  
  ngOnInit(): void {    
    this.getPatientDetails();
  }

  reOrder(){
    this.api.reOrder(this.patientId).subscribe(res=>{
      this.api.successMessage('تم اعادة الحجز بنجاح').afterDismissed().subscribe(re=>{
      this.router.navigate(['admin'])

      });

    })
  }
  
  getPatientDetails(){
    this.api.getSpecificPatients(this.patientId).subscribe((res:any)=>{
      this.patientData= res.data;
      console.log(this.patientData);
      
    })
  }

}
