import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { ArticlesComponent } from './space/articles/articles.component';
import { PicturesComponent } from './space/pictures/pictures.component';
import { VideosComponent } from './space/videos/videos.component';
// import { PomodoroClockComponent } from './pomodoro-clock/pomodoro-clock.component';
// import { NoiseComponent } from './noise/noise.component';

// import { PolarEquationsComponent } from './polar-equations/polar-equations.component';
// import { RgbCubeComponent } from './rgb-cube/rgb-cube.component';
// import { Babylon4portComponent } from './babylon4port/babylon4port.component';

// import { MengercloneComponent } from './mengerclone/mengerclone.component';
// import { MengerplanesComponent } from './mengerplanes/mengerplanes.component';

// import { SoundComponent } from './sound/sound.component';
// import { SoundframeComponent } from './soundframe/soundframe.component';
import { FrameComponent } from './frame/frame.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'space/articles', component: ArticlesComponent },
  { path: 'space/pictures', component: PicturesComponent },
  { path: 'space/videos', component: VideosComponent },

  // { path: 'sound', component: SoundComponent },
  // { path: 'soundframe', component: SoundframeComponent },
  // { path: 'pomodoro', component: PomodoroClockComponent },
  // { path: 'noise', component: NoiseComponent },
  // { path: 'polareqs', component: PolarEquationsComponent },
  // { path: 'rgbcube', component: RgbCubeComponent },
  // { path: 'babylon4port', component: Babylon4portComponent },
  // { path: 'mengerclone', component: MengercloneComponent },
  // { path: 'mengerplanes', component: MengerplanesComponent },
  { path: 'frame/:dest', component: FrameComponent},
  { path: '',  redirectTo: 'home', pathMatch: 'full' }, 
  { path: '**', redirectTo: 'home' }

];

@NgModule({
  // imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
