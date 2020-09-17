import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { PatientDetailesComponent } from './patient-detailes/patient-detailes.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AddDiagnoseComponent } from './components/add-diagnose/add-diagnose.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { PatientsFilesComponent } from './patients-files/patients-files.component';


const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: 'forget_password', component: ForgetPasswordComponent},

  { path: '', redirectTo: '/admin', pathMatch: 'full',canActivate: [AuthGuardService] },
  
  {path: 'admin', component: HomeComponent , canActivate: [AuthGuardService]},
  {path: 'patients_files', component: PatientsFilesComponent , canActivate: [AuthGuardService]},
  {path: 'add_patient', component: AddPatientComponent, canActivate: [AuthGuardService]},
  {path: 'patient_details/:id', component:PatientDetailesComponent, canActivate: [AuthGuardService]},
  {path: 'add_diagnose/:id', component:AddDiagnoseComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
