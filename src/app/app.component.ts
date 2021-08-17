import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title:string = 'Combined';

  @ViewChild('headerContainer') headerContainer: ElementRef;
  @ViewChild('mainContainer') mainContainer: ElementRef;

  ngAfterViewInit(): void {
    var headerWidth = this.headerContainer.nativeElement.offsetWidth;
    var headerHeight = this.headerContainer.nativeElement.offsetHeight;

    console.log('Header Width:' + headerWidth);
    console.log('Header Height: ' + headerHeight);
      
    var mainWidth = this.mainContainer.nativeElement.offsetWidth;
    var mainHeight = this.mainContainer.nativeElement.offsetHeight;

    console.log('Main Width:' + mainWidth);
    console.log('Main Height: ' + mainHeight);
  }

  onWindowResize() {
    console.log('Resizing');

    var headerWidth = this.headerContainer.nativeElement.offsetWidth;
    var headerHeight = this.headerContainer.nativeElement.offsetHeight;

    console.log('Header Width:' + headerWidth);
    console.log('Header Height: ' + headerHeight);
  
    var mainWidth = this.mainContainer.nativeElement.offsetWidth;
    var mainHeight = this.mainContainer.nativeElement.offsetHeight;

    console.log('Main Width:' + mainWidth);
    console.log('Main Height: ' + mainHeight);
  }

}
