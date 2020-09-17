import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoading: boolean = false;
  invalidLogin: boolean = false;
  isLogin:boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {
  
  }

  animateLabel(label: HTMLElement){
    label.classList.add('animate');
  }


  login(credentials) {
    this.isLoading = true;

    this.api.login(credentials).subscribe(
     (res:any)=>
    {
     
      if(res.status === 200){
        this.checkRoles(res);
      }
      
      if(res.status === 400){
        this.isLoading = false;
        this.invalidLogin = true;  
      }

      
      }, error => {
        this.isLoading = false;
        this.invalidLogin = true;
      }
      ,()=> this.isLoading = false 
    );
  }

  private checkRoles(res){
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('role', res.data.role);
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') ;

    this.router.navigate(['/admin']).then(res=>{
      location.reload();
    });
  }
  
}
