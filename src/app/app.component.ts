import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'Combined';

  @ViewChild('headerContainer')
  headerContainer: ElementRef;

  ngAfterViewInit(): void {
    var headerWidth = this.headerContainer.nativeElement.offsetWidth;
    var headerHeight = this.headerContainer.nativeElement.offsetHeight;

    console.log('Header Width:' + headerWidth);
    console.log('Header Height: ' + headerHeight);
  }

}
