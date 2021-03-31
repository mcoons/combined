import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './Safe.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports:[
    SafePipe,
    CommonModule
  ],
  declarations: [
    SafePipe
  ]
})

export class ApplicationPipesModule { }
