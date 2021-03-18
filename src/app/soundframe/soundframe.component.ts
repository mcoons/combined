import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soundframe',
  templateUrl: './soundframe.component.html',
  styleUrls: ['./soundframe.component.css']
})
export class SoundframeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0,document.body.scrollHeight);

  }

}
