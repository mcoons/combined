import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { OptionsService } from './services/options/options.service';

@Component({
  selector: 'app-sound',
  templateUrl: './sound.component.html',
  styleUrls: ['./sound.component.css'],
  encapsulation: ViewEncapsulation.None,

  animations: [
    trigger('optionsPanelOpenClose', [
      state('optionsPanelOpen', style({
        marginRight: '0px'
      })),
      state('optionsPanelClosed', style({
        marginRight: '-270px',
      })),
      transition('optionsPanelOpen => optionsPanelClosed', [
        animate('.75s')
      ]),
      transition('optionsPanelClosed => optionsPanelOpen', [
        animate('.75s')
      ])
    ]),

    trigger('favoritesPanelOpenClose', [
      state('favoritesPanelOpen', style({
        marginLeft: '0px'
      })),
      state('favoritesPanelClosed', style({
        marginLeft: '-270px',
      })),
      transition('favoritesPanelOpen => favoritesPanelClosed', [
        animate('.75s')
      ]),
      transition('favoritesPanelClosed => favoritesPanelOpen', [
        animate('.75s')
      ])
    ]),

    trigger('splashOpenClose', [
      state('splashOpen', style({
        opacity: 1,
        zIndex: 500
      })),
      state('splashClosed', style({
        opacity: 0,
        zIndex: -500
      })),
      transition('splashOpen => splashClosed', [
        animate('1s')
      ]),
      transition('splashClosed => splashOpen', [
        animate('1s')
      ])
    ])

  ]
})
export class SoundComponent implements OnInit {

  private _title = 'MP3 Visualyzer Ng';

  constructor(
    @Inject(OptionsService) public optionsService: OptionsService,
  
  
  ) { 
  }

  ngOnInit(): void {
    window.scrollTo(0,document.body.scrollHeight);

  }

  get title(): string {
    return this._title;
  }

  togglePanel(): void {
    this.optionsService.toggleState('showPanel');
  }


  toggleFavorites(): void {
    this.optionsService.toggleState('showFavorites');
  }
}
