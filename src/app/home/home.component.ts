import { Component, OnInit } from '@angular/core';
import { appData2D, appData3D } from '../appData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  appData2D;
  appData3D;
  
  constructor() { 
    this.appData2D = appData2D;
    this.appData3D = appData3D;
  }

  ngOnInit(): void {

  }
}
