import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
collapse = true;
loginPage  = false;
role = +localStorage.getItem('role')
  constructor(private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {

   this.route.url.subscribe((res:UrlSegment[])=>{
    this.loginPage =  (window.location.href.includes('/login'))? true : false;  
   });
   
  }

  toggle(){
    this.collapse = !this.collapse
  }

  logOut(){
    this.loginPage = true;
    localStorage.clear();
    location.reload();
  }

  goTo(link){
    this.toggle();
    this.router.navigateByUrl(link)
  }
}
