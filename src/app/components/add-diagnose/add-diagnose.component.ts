import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-add-diagnose',
  templateUrl: './add-diagnose.component.html',
  styleUrls: ['./add-diagnose.component.scss']
})
export class AddDiagnoseComponent implements OnInit {
name;
patientId = this.route.snapshot.paramMap.get('id');

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
  
constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit(): void {    
    this.getPatientData();
  }

  private getPatientData(){
    this.api.getSpecificPatients(this.patientId).subscribe((res:any)=>{
      this.patientData = res.data;
      
      this.patientData['patient_id'] = this.patientId
    })
  }

  addDiagnose(){
    let patientData = {
      patient_id: this.patientId || "",
      complaint: this.patientData.complaint || "",
      examination: this.patientData.examination || "",
      diagnosis:this.patientData.diagnosis || "",
      investigation: this.patientData.investigation || "",
      treamtent: this.patientData.treamtent || "",
      reseen: this.patientData.reseen || "", 
      hn: this.patientData.hn || "",
      hrt: this.patientData.hrt || "",
      nose: this.patientData.nose || "",
      phnx:this.patientData.phnx || "",
      chest: this.patientData.chest || "",
      gentalia: this.patientData.gentalia || "",
      abd: this.patientData.abd || "",
      other: this.patientData.other || ""
    }

    
    
    
    this.api.updateDiagnose(patientData).subscribe(res=>{
      this.api.successMessage('diagnose added successfully').afterDismissed().subscribe(rs=>{
        this.router.navigateByUrl('/')

      });
    },err=>{
      console.log(err);
      
    });
  }
}
