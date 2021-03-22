import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientJsonpModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainnavComponent } from './mainnav/mainnav.component';
import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './space/articles/articles.component';
import { PicturesComponent } from './space/pictures/pictures.component';
import { VideosComponent } from './space/videos/videos.component';
import { FrameComponent } from './frame/frame.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    MainnavComponent,
    HomeComponent,
    ArticlesComponent,
    PicturesComponent,
    VideosComponent,
    FrameComponent,
  ],
  imports: [
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatExpansionModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
