import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';

import { FrameComponent } from './frame/frame.component';
import { ApplicationPipesModule } from './ApplicationPipes/ApplicationPipes.module';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'projects', component: ProjectsComponent },

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
