import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit, AfterViewInit {

  public frameDestination;
  public paramSubscription;

  public isFrameLoaded = false;

  public frameTop;
  public frameBottom;
  public frameHeight;

  public navTop;
  public navBottom;
  public navHeight;

  public headerTop;
  public headerBottom;
  public headerHeight;

  @ViewChild('frame')
  frame: ElementRef;

  @ViewChild('frameContainer')
  frameContainer: ElementRef;

  public urlDict = {
    'mp3player'    : 'https://soundanalyzerng.herokuapp.com?fromIframe=true',
    // 'mp3player': '//localhost:4300?fromIframe=true',
    'polareqs': 'https://polareqs.michaelcoons.tech?fromIframe=true',
    'noise': 'https://noise.michaelcoons.tech?fromIframe=true',
    'pomodoroclock': 'https://pomodoro.michaelcoons.tech?fromIframe=true',
    'mengerclones': 'https://mcoons.github.io/menger2?fromIframe=true',
    'mengerplanes': 'https://mcoons.github.io/mengerplanes?fromIframe=true',
    'babylon4port': 'https://mcoons.github.io/babylon-template?fromIframe=true',
    'rgbcube': 'https://mcoons.github.io/color?fromIframe=true',
    'towerpoc': 'https://mcoons.github.io/tower-of-horror?fromIframe=true',
    'pixelpaint':'https://pixelpaint-81fce.firebaseapp.com',
    'tower':'https://mcoons.github.io/UnityTowerDist?fromIframe=true',
    'snow':'https://snowflakes.michaelcoons.tech/?fromIframe=true'
  }

  constructor(private _Activatedroute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.paramSubscription = this._Activatedroute.paramMap.subscribe((params: ParamMap) => {
      this.frameDestination = params.get('dest');
    });
  }

  ngAfterViewInit(): void {
    var frameWidth = this.frameContainer.nativeElement.offsetWidth;
    var frameHeight = this.frameContainer.nativeElement.offsetHeight;

    console.log('Frame Width:' + frameWidth);
    console.log('Frame Height: ' + frameHeight);
  }

  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
  }

  sendMessage(event) {

    if (!this.isFrameLoaded) {

      this.isFrameLoaded = true;
      console.log('Frame Loaded');

      setTimeout(() => {

        this.frame.nativeElement.contentWindow.postMessage(
          {
            call: 'sendValue',
            value: 'data',
            time: new Date().toLocaleTimeString()
          },
          // window.location.origin
          '*'
        );

      }, 5000);
    }
  }


}
