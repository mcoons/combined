import { Component, OnInit } from '@angular/core';
import { appData2D, appData3D } from '../appData';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  appData2D;
  appData3D;

  constructor() { 
    this.appData2D = appData2D;
    this.appData3D = appData3D;
  }

  ngOnInit(): void {

  }
}
