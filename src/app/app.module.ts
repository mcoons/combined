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

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatExpansionModule } from '@angular/material/expansion';
import { SoundComponent } from './sound/sound.component';
import { AudioModule } from './sound/audio/audio.module';
import { Canvas2DComponent } from './sound/components/canvas2-d/canvas2-d.component';
import { Canvas3DComponent } from './sound/components/canvas3-d/canvas3-d.component';
import { TitleComponent } from './sound/components/title/title.component';
import { SplashScreenComponent } from './sound/components/splash-screen/splash-screen.component';
import { GeneralOptionsComponent } from './sound/components/general-options/general-options.component';
import { VisualEffectsComponent } from './sound/components/visual-effects/visual-effects.component';
import { DevOptionsComponent } from './sound/components/dev-options/dev-options.component';
import { LightOptionsComponent } from './sound/components/light-options/light-options.component';
import { PanelLeftComponent } from './sound/components/panel-left/panel-left.component';
import { PanelRightComponent } from './sound/components/panel-right/panel-right.component';
import { VisualSelectionComponent } from './sound/components/visual-selection/visual-selection.component';

import { WindowRefService } from './sound/services/window-ref/window-ref.service';
import { AudioService } from './sound/services/audio/audio.service';
import { EngineService } from './sound/services/engine/engine.service';
import { MessageService } from './sound/services/message/message.service';
import { OptionsService } from './sound/services/options/options.service';
import { StorageService } from './sound/services/storage/storage.service';
import { ColorsService } from './sound/services/colors/colors.service';
import { PomodoroClockComponent } from './pomodoro-clock/pomodoro-clock.component';
import { NoiseComponent } from './noise/noise.component';
import { PolarEquationsComponent } from './polar-equations/polar-equations.component';
import { RgbCubeComponent } from './rgb-cube/rgb-cube.component';
import { Babylon4portComponent } from './babylon4port/babylon4port.component';
import { MengerplanesComponent } from './mengerplanes/mengerplanes.component';
import { SoundframeComponent } from './soundframe/soundframe.component';


@NgModule({
  declarations: [
    AppComponent,
    SoundComponent,
    MainnavComponent,
    HomeComponent,
    ArticlesComponent,
    PicturesComponent,
    VideosComponent,

    Canvas2DComponent,
    Canvas3DComponent,
    TitleComponent,
    SplashScreenComponent,
    GeneralOptionsComponent,
    VisualEffectsComponent,
    DevOptionsComponent,
    LightOptionsComponent,
    PanelLeftComponent,
    PanelRightComponent,
    VisualSelectionComponent,
    PomodoroClockComponent,
    NoiseComponent,
    PolarEquationsComponent,
    RgbCubeComponent,
    Babylon4portComponent,
    MengerplanesComponent,
    SoundframeComponent,
  ],
  imports: [
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    MatExpansionModule,
    AudioModule
  ],
  providers: [
    WindowRefService,
    AudioService,
    EngineService,
    MessageService,
    OptionsService,
    StorageService,
    ColorsService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
