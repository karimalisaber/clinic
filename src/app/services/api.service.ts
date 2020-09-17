import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';

const url = 'http://www.clinic.ieeeshasb.org/';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  

  constructor(private http:HttpClient, private snack: MatSnackBar) { }

  login(credentials){
    let loginUrl = `${url}api/auth/login`
    return this.http.post(loginUrl, credentials);
  }

  
  forgetPassword(email){
    let forgetPasswordUrl = `${url}api/auth/forget_password`
    return this.http.post(forgetPasswordUrl, email);
  }

  addPatient(patient){
    let addPatientUrl = `${url}api/doctor/add_patient`;

    return this.http.post(addPatientUrl, patient);
  }

  getAllPatients(page){
    let allPatientsUrl = `${url}api/doctor/all_patient?page=${page}`;
    return this.http.get(allPatientsUrl);
  }

  
  getAllOrderedPatients(page){
    let allPatientsUrl = `${url}api/doctor/all_orders_patients?page=${page}`;
    return this.http.get(allPatientsUrl);
  }

  deletePatient(id){
    let deletePatientsUrl = `${url}api/doctor/delete_patient/${id}`;
    
    return this.http.get(deletePatientsUrl);
  }
  

  getSpecificPatinet(id){
    let specificPatientsUrl = `${url}api/doctor/specific_patient/${id}`;

    return this.http.get(specificPatientsUrl)
  }
  
  getSpecificPatients(id){
    let specificPatientsUrl = `${url}api/doctor/specific_patient/${id}`;
    return this.http.get(specificPatientsUrl);
  }

  successMessage(message){
    return this.snack.openFromComponent(SnackbarComponent, {duration: 2000, panelClass: 'background-none', horizontalPosition: 'right', verticalPosition: 'top' , data: {message}}  );
  }

  updateDiagnose(diagnose){
    let addPatientUrl = `${url}api/doctor/update_patient`;

    return this.http.post(addPatientUrl, diagnose);
  }
}
