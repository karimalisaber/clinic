import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AssetsService } from '../services/assets.service';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../services/api.service';

@Component({
  selector: 'app-patient-detailes',
  templateUrl: './patient-detailes.component.html',
  styleUrls: ['./patient-detailes.component.scss']
})
export class PatientDetailesComponent implements OnInit {
  constructor(private route: ActivatedRoute, private api: ApiService ) { }
  patientId = this.route.snapshot.paramMap.get('id')
  
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
  
    notes:'',
    date: ''
  }
  
  
  ngOnInit(): void {
    
    this.getPatientDetails();
  }

  
  getPatientDetails(){
    this.api.getSpecificPatients(this.patientId).subscribe((res:any)=>{
      this.patientData= res.data;      
    })
  }

}
