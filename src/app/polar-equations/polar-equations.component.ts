import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-polar-equations',
  templateUrl: './polar-equations.component.html',
  styleUrls: ['./polar-equations.component.css']
})
export class PolarEquationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0,document.body.scrollHeight);

  }

}
