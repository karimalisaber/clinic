import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-add-diagnose',
  templateUrl: './add-diagnose.component.html',
  styleUrls: ['./add-diagnose.component.scss']
})
export class AddDiagnoseComponent implements OnInit {
name;
patientId = this.route.snapshot.paramMap.get('id');
form = new FormData;

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
  phnx:'',
  chest: '',
  gentalia: '',
  abd: '',
  other: '',
  wt: '',
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
  tep: '',
  hc: '',
  note:'',
  date: '',
}
  
constructor(private route: ActivatedRoute, private api: ApiService, private router: Router, private dialog: MatDialog) { }
isLoading = false;
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
    this.isLoading = true
    let patientData =
    {
      patient_id: this.patientId || "",
      complaint: this.patientData.complaint || "",
      examination: this.patientData.examination || "",
      diagnosis:this.patientData.diagnosis || "",
      investigation: this.patientData.investigation || "",
      treamtent: this.patientData.treamtent || "",
      reseen: this.patientData.reseen || "", 
      hn: this.patientData.hn || "",
      hrt: this.patientData.hrt || "",
      phnx:this.patientData.phnx || "",
      chest: this.patientData.chest || "",
      gentalia: this.patientData.gentalia || "",
      abd: this.patientData.abd || "",
      wt: this.patientData.wt || "",
      other: this.patientData.other || "",
      tep: this.patientData.tep,
      hc: this.patientData.hc
    }

     this.form.append("patient_id" , this.patientId || "")
     this.form.append("complaint", this.patientData.complaint || "")
     this.form.append( "examination", this.patientData.examination || "")
     this.form.append( "diagnosis",this.patientData.diagnosis || "")
     this.form.append( "investigation", this.patientData.investigation || "")
     this.form.append( "treamtent", this.patientData.treamtent || "")
     this.form.append( "reseen", this.patientData.reseen || "") 
     this.form.append( "hn", this.patientData.hn || "")
     this.form.append( "hrt", this.patientData.hrt || "")
     this.form.append( "phnx",this.patientData.phnx || "")
     this.form.append( "chest", this.patientData.chest || "")
     this.form.append( "gentalia", this.patientData.gentalia || "")
     this.form.append(  "abd", this.patientData.abd || "")
     this.form.append( "wt", this.patientData.wt || "")
     this.form.append( "other", this.patientData.other || "")
     this.form.append(  "tep", this.patientData.tep)
     this.form.append( "hc", this.patientData.hc)

    
    
    this.api.updateDiagnose(this.form).subscribe(res=>{
      this.api.successMessage('diagnose added successfully').afterDismissed().subscribe(rs=>{
        this.router.navigateByUrl('/')
        this.isLoading = false
      });
    },err=>{
      this.isLoading = true
      
    });
  }

  editPatient(){

  }

  deletePatient(){
    return  this.dialog.open(DeleteDialogComponent,{
      panelClass: 'confirm-dialog-container',
      position: {top: '20px'},
    })
      .afterClosed().subscribe(res=>{
        if(res ==='yes'){
          
          this.api.deletePatient(this.patientId).subscribe(res=>{
            
            this.router.navigateByUrl('')
           })
        }
        
      },err=>{
      })
  }

  deletePatientOrder(){
    return  this.dialog.open(DeleteDialogComponent,{
      panelClass: 'confirm-dialog-container',
      position: {top: '20px'},
    })
      .afterClosed().subscribe(res=>{
        if(res ==='yes'){
          
          this.api.deletePatientOrder(this.patientId).subscribe(res=>{
            this.router.navigateByUrl('')

          })
        }
        
      },err=>{
      })
  }
  
  uploadFiles(files){
    if(files.files){
      for(let i=0; i<files.files.length; i++ ){
        this.form.append('files[]', files.files[i]);
      }
    }
  }
}
