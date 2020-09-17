import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
isLoading = false;
  constructor(private api : ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  
  animateLabel(label: HTMLElement){
    label.classList.add('animate');
  }

  forgetPassword(credentials) {
    this.isLoading = true;
    this.api.forgetPassword(credentials).subscribe(
     (res:any)=>
      {        
          this.api.successMessage('تم إرسال رسالة إلى البريد الالكتروني').afterDismissed()
          .subscribe(res=>{
            this.router.navigateByUrl('login')
          })

      }, error => 
        {
          this.isLoading = false;
        }
      ,
      ()=>
        {
          this.isLoading = false;
        }
      );

  }

}
