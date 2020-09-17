import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';``
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HomeComponent } from './components/home/home.component';
import {MatTableModule} from '@angular/material/table';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { PatientDetailesComponent } from './patient-detailes/patient-detailes.component';
import { HttpClientModule } from '@angular/common/http';
import { AddDiagnoseComponent } from './components/add-diagnose/add-diagnose.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PatientsFilesComponent } from './patients-files/patients-files.component';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    AddPatientComponent,
    PatientDetailesComponent,
    AddDiagnoseComponent,
    ForgetPasswordComponent,
    SnackbarComponent,
    PatientsFilesComponent,
    DeleteDialogComponent,
  ],

  entryComponents:[
    DeleteDialogComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatTableModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
