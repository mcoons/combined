import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-babylon4port',
  templateUrl: './babylon4port.component.html',
  styleUrls: ['./babylon4port.component.css']
})
export class Babylon4portComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0,document.body.scrollHeight);
  }

}
