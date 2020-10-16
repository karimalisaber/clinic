import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'doctor';
  constructor(private elRef: ElementRef){

  }

  ngOnInit(): void {
    this.elRef.nativeElement.addEventListener('click', res=>{console.log(res);
    } );

  }
  
  // @HostListener('click') clo($event){
  //   console.log('koko', $event);
  // } 
  
}
