import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

// import { ArticlesComponent } from './space/articles/articles.component';
// import { PicturesComponent } from './space/pictures/pictures.component';
// import { VideosComponent } from './space/videos/videos.component';

import { FrameComponent } from './frame/frame.component';
import { ApplicationPipesModule } from './ApplicationPipes/ApplicationPipes.module';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },

  // { path: 'space/articles', component: ArticlesComponent },
  // { path: 'space/pictures', component: PicturesComponent },
  // { path: 'space/videos', component: VideosComponent },

  { path: 'frame/:dest', component: FrameComponent },

  { path: 'about', component: AboutComponent },


  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    ApplicationPipesModule
  ],
  exports: [RouterModule],
  declarations: [],
  providers: []
})
export class AppRoutingModule { }
