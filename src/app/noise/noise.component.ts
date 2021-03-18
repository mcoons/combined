import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noise',
  templateUrl: './noise.component.html',
  styleUrls: ['./noise.component.css']
})
export class NoiseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0,document.body.scrollHeight);

  }

}
