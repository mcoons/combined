import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientJsonpModule } from '@angular/common/http';
// import { Ngonload } from 'ng-onload';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainnavComponent } from './mainnav/mainnav.component';
import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './space/articles/articles.component';
import { PicturesComponent } from './space/pictures/pictures.component';
import { VideosComponent } from './space/videos/videos.component';
import { FrameComponent } from './frame/frame.component';
import { ApplicationPipesModule } from './ApplicationPipes/ApplicationPipes.module';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    MainnavComponent,
    HomeComponent,
    ArticlesComponent,
    PicturesComponent,
    VideosComponent,
    FrameComponent,
    AboutComponent,
  ],
  imports: [
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserModule,
    AppRoutingModule,
    ApplicationPipesModule
  ],
  providers: [
    ApplicationPipesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
