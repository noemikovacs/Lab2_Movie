import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesEditComponent } from './movies-edit/movies-edit.component';
import { MoviesListComponent } from './movies-list/movies-list.component';



@NgModule({
  declarations: [MoviesEditComponent, MoviesListComponent],
  imports: [
    CommonModule
  ]
})
export class MoviesModule { }
