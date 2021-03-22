// import { Component, OnInit } from '@angular/core';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mainnav',
  templateUrl: './mainnav.component.html',
  styleUrls: ['./mainnav.component.css']
})
export class MainnavComponent implements OnInit, AfterViewInit {
  navbarOpen = false;

  @ViewChild('mainNav')
  mainNav: ElementRef;

  constructor() { }

  ngOnInit(): void {
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

}
