import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map } from 'rxjs/operators';

// const url = 'http://www.clinic.ieeeshasb.org/

const  url = 'http://localhost:3000/api/';

@Injectable({
  providedIn: 'root'
})

export class ApiService {


  constructor(private http:HttpClient, private snack: MatSnackBar) { }

  login(credentials){
    let loginUrl = `${url}user/login`
    return this.http.post(loginUrl, credentials);
  }


  forgetPassword(email){
    let forgetPasswordUrl = `${url}auth/forget_password`
    return this.http.post(forgetPasswordUrl, email);
  }

  addPatient(patient){
    let addPatientUrl = `${url}doctor/add_patient`;

    return this.http.post(addPatientUrl, patient);
  }

  editPatient(patient){
    let addPatientUrl = `${url}doctor/update_patient_data`;

    return this.http.post(addPatientUrl, patient);
  }

  getAllPatients(page){
    let allPatientsUrl = `${url}doctor/all_patient?page=${page}`;
    return this.http.get(allPatientsUrl);
  }


  getfilteredPatients(name){
    let allPatientsUrl = `${url}doctor/search`;
    return this.http.post(allPatientsUrl, {name});
  }

  reOrder(patient_id){
    let reOrderUrl = `${url}doctor/re_order`;

    return this.http.post(reOrderUrl, {patient_id});
  }

  getAllOrderedPatients(page){
    let allPatientsUrl = `${url}doctor/all_orders_patients?page=${page}`;

    return this.http.get(allPatientsUrl);
  }

  deletePatient(id){
    let deletePatientsUrl = `${url}doctor/delete_patient_profile/${id}`;

    return this.http.get(deletePatientsUrl);
  }

  deletePatientOrder(id){
    let deletePatientsUrl = `${url}doctor/delete_patient_order/${id}`;

    return this.http.get(deletePatientsUrl);
  }

  getSpecificPatinet(id){
    let specificPatientsUrl = `${url}doctor/specific_patient/${id}`;

    return this.http.get(specificPatientsUrl)
  }

  getSpecificPatients(id){
    let specificPatientsUrl = `${url}doctor/specific_patient/${id}`;
    return this.http.get(specificPatientsUrl).pipe(map((res:any)=> res.data));
  }

  successMessage(message){
    return this.snack.openFromComponent(SnackbarComponent, {duration: 2000, panelClass: 'background-none', horizontalPosition: 'right', verticalPosition: 'top' , data: {message}}  );
  }

  updateDiagnose(diagnose){
    let addPatientUrl = `${url}doctor/update_patient`;

    return this.http.post(addPatientUrl, diagnose);
  }
}
