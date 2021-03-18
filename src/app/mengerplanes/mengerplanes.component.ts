import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mengerplanes',
  templateUrl: './mengerplanes.component.html',
  styleUrls: ['./mengerplanes.component.css']
})
export class MengerplanesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0,document.body.scrollHeight);

  }

}
