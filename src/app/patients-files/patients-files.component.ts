import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../services/api.service';
import { AssetsService } from '../services/assets.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from './../components/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-patients-files',
  templateUrl: './patients-files.component.html',
  styleUrls: ['./patients-files.component.scss']
})
export class PatientsFilesComponent implements OnInit {

  patients: Array<any>;
  pages = {
    current_page: 1,
    last_page: 1,
    pagesNumber: []
  };
  displayedColumns: string[] = ['name', 'age', 'phone', 'address', 'action'];
  
  role = +localStorage.getItem('role')

  isLoading: boolean = false;
  subscription: Subscription;

  constructor( private assets: AssetsService, private api: ApiService , private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getPatients();
  }

  
  getPatients(){
    this.isLoading = true;

    this.api.getAllPatients(this.pages.current_page).subscribe((res:any)=>{
      this.patients = res.data.data;
      this.pages.current_page = res.data.current_page;
      this.pages.last_page = res.data.last_page;
      this.pages.pagesNumber = Array(this.pages.last_page);

    },error=>{},
    ()=>{
      this.isLoading  = false;
    } 
    )
  }

  
  prev(){
    if(this.pages.current_page <= 1) return
    this.pages.current_page--;
    this.getPatients();
  }

  next(){
    if(this.pages.current_page >= this.pages.last_page) return
    this.pages.current_page++;
    this.getPatients();
  }

  otherPatients(pageNumber){
    if(pageNumber !== this.pages.current_page){
      this.pages.current_page = pageNumber;
      
    //   this.router.navigate([], {
    //     queryParams: {'page': this.pages.current_page},
    //  });

      this.getPatients();
    }
  }

  deleteAlert(id){
    // this.assets.deleteAlert(id).subscribe(res=> res? this.delete(id): false)
  }


}
