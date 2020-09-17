import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AssetsService } from 'src/app/services/assets.service';
import { ApiService } from './../../services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { RealtimeService } from './../../services/realtime.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  patients: Array<any>;
  pages = {
    current_page: 1,
    last_page: 1,
    pagesNumber: []
  };
  displayedColumns: string[] = ['name', 'age', 'phone', 'address', 'action', 'delete'];
  
  isLoading: boolean = false;
  subscription: Subscription;

  role:number  = +localStorage.getItem('role');

  constructor( private assets: AssetsService, private api: ApiService, private dialog: MatDialog, private pusher : RealtimeService, private changeDetector: ChangeDetectorRef ) { }

  ngOnInit(): void {
    this.getPatients();
    this.getNewPatients();
  }

  getNewPatients(){
    this.pusher.channel.bind('new_order', res => {
      // this.allOrders.push(res.data);
      // this.filteredOrders = this.allOrders;

      // this.patients.push(res.data)
      // this.changeDetector.detectChanges();

      location.reload()
    });
  }

  
  delete(id){    
    let index = this.patients.findIndex(res=>res.id === id); 
    let patient = this.patients.splice(index , 1);
    
    return  this.dialog.open(DeleteDialogComponent,{
      panelClass: 'confirm-dialog-container',
      position: {top: '20px'},
    })
      .afterClosed().subscribe(res=>{
        if(res ==='yes'){
          
          this.api.deletePatient(id).subscribe(res=>{
            location.reload()            
          })
        }
        
      },err=>{
        this.patients.splice(index, 0 , patient)
      })
    // this.backend.delete(id);
  }

  
  getPatients(){
    this.isLoading = true;

    this.api.getAllOrderedPatients(this.pages.current_page).subscribe((res:any)=>{
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
