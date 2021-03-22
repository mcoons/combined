import { Component, OnInit, SecurityContext, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit, AfterViewInit {

  public dest;
  public sub;


  public frameTop;
  public frameBottom;
  public frameHeight;

  public navTop;
  public navBottom;
  public navHeight;

  public headerTop;
  public headerBottom;
  public headerHeight;

  @ViewChild('frameContainer')
  frameContainer: ElementRef;

  public urlDict = {
    'mp3player'    : 'https://soundanalyzerng.herokuapp.com/',
    'polareqs'     : 'https://polareqs.michaelcoons.tech/',
    'noise'        : 'https://noise.michaelcoons.tech/',
    'pomodoroclock': 'https://pomodoro.michaelcoons.tech/',
    'mengerclones' : 'https://mcoons.github.io/menger2/',
    'mengerplanes' : 'https://mcoons.github.io/mengerplanes/',
    'babylon4port' : 'https://mcoons.github.io/babylon-template/',
    'rgbcube'      : 'https://mcoons.github.io/color/',
  }

  constructor(private _sanitizer: DomSanitizer, private _Activatedroute:ActivatedRoute, private _router:Router) { 
  }

  ngOnInit(): void {
    this.sub = this._Activatedroute.paramMap.subscribe(params => { 
      this.dest = params.get('dest'); 
      window.scrollTo(0,document.body.scrollHeight);
    });
  }

  ngAfterViewInit():void {
    var frameWidth = this.frameContainer.nativeElement.offsetWidth;
    var frameHeight = this.frameContainer.nativeElement.offsetHeight;


    console.log('Frame Width:' + frameWidth);
    console.log('Frame Height: ' + frameHeight);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  frameURL(){
    return this._sanitizer.bypassSecurityTrustResourceUrl(this.urlDict[this.dest]);
  }

}
