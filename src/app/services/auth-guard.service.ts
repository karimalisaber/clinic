import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService {
  constructor (private route: ActivatedRoute, private router: Router) { }

  
  isLogin(){
    const helper = new JwtHelperService();
    
    let token = localStorage.getItem('token');

    if(!token)
      return false ;

    const isExpired = helper.isTokenExpired(token);
  
    return !isExpired;
  }



  canActivate(route, state: RouterStateSnapshot){
    if (this.isLogin()) return true;

     this.router.navigate([ '/login'], {queryParams: {returnUrl: state.url}});
    return false;
  }

}
