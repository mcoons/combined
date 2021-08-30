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
    'menger':'https://mcoons.github.io/menger/',
    'mp3player'    : 'https://soundanalyzer.michaelcoons.tech?fromIframe=true',
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
    'snow':'https://snowflakes.michaelcoons.tech/?fromIframe=true',
    'reactnews':'https://mcoons.github.io/react-news/?fromIframe=true',
    'g90':'https://g90.herokuapp.com/students',
    'spartans':'https://spartanfb.herokuapp.com/',
    '3dcharts':'https://mcoons.github.io/3dcharts/'
  }

  constructor(private _Activatedroute: ActivatedRoute) {
    this.isFrameLoaded = false;

  }

  ngOnInit(): void {
    this.isFrameLoaded = false;
    this.paramSubscription = this._Activatedroute.paramMap.subscribe((params: ParamMap) => {
      this.frameDestination = params.get('dest');
      this.isFrameLoaded = false;

    });
  }

  ngAfterViewInit(): void {
    var frameWidth = this.frameContainer.nativeElement.offsetWidth;
    var frameHeight = this.frameContainer.nativeElement.offsetHeight;

    // console.log('Frame Width:' + frameWidth);
    // console.log('Frame Height: ' + frameHeight);
    this.isFrameLoaded = false;

  }

  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
  }

  sendMessage(event) {

    console.log('Is Frame Loaded: '|| this.isFrameLoaded);
    if (!this.isFrameLoaded) {

      this.isFrameLoaded = true;

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
