// import { Component, OnInit } from '@angular/core';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { appData2D } from '../appData';
import { appData3D } from '../appData';

@Component({
  selector: 'app-mainnav',
  templateUrl: './mainnav.component.html',
  styleUrls: ['./mainnav.component.css']
})
export class MainnavComponent implements OnInit, AfterViewInit {
  navbarOpen = false;
  appData2D;
  appData3D;

  @ViewChild('mainNav')
  mainNav: ElementRef;

  constructor() { 
    this.appData2D = appData2D;
    this.appData3D = appData3D;
  }

  ngOnInit(): void {
    console.log("appData2D");
    console.log(appData2D);
    
  }

  ngAfterViewInit(): void {
    var navWidth = this.mainNav.nativeElement.offsetWidth;
    var navHeight = this.mainNav.nativeElement.offsetHeight;


    console.log('Nav Width:' + navWidth);
    console.log('Nav Height: ' + navHeight);

  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

//   $('.navbar-collapse a').click(function(){
//     $(".navbar-collapse").collapse('hide');
// });


}
