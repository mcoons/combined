import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-appcard',
  templateUrl: './appcard.component.html',
  styleUrls: ['./appcard.component.css'],
})
export class AppcardComponent implements OnInit {

  @Input() carditem: any;
  constructor() { }

  ngOnInit(): void {
  }

}
