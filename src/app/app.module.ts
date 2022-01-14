import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientJsonpModule } from '@angular/common/http';
// import { Ngonload } from 'ng-onload';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MainnavComponent } from './mainnav/mainnav.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { FrameComponent } from './frame/frame.component';
import { ApplicationPipesModule } from './ApplicationPipes/ApplicationPipes.module';
import { AboutComponent } from './about/about.component';

import { AppcardComponent } from './appcard/appcard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    MainnavComponent,
    ProjectsComponent,
    FrameComponent,
    AboutComponent,
    AppcardComponent,
    HomeComponent
    ],
  imports: [
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserModule,
    AppRoutingModule,
    ApplicationPipesModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule
  ],
  providers: [
    ApplicationPipesModule
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
