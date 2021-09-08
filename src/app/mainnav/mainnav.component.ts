import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { appData2D } from '../appData';
import { appData3D } from '../appData';

@Component({
  selector: 'app-mainnav',
  templateUrl: './mainnav.component.html',
  styleUrls: ['./mainnav.component.css']
})
export class MainnavComponent implements AfterViewInit {
  navbarOpen = false;
  appData2D;
  appData3D;

  @ViewChild('mainNav')
  mainNav: ElementRef;

  constructor() { 
    this.appData2D = appData2D;
    this.appData3D = appData3D;
  }


  ngAfterViewInit(): void {
    var navWidth = this.mainNav.nativeElement.offsetWidth;
    var navHeight = this.mainNav.nativeElement.offsetHeight;

  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
