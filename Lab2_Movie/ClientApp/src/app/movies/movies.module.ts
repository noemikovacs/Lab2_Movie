import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesEditComponent } from './movies-edit/movies-edit.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MoviesService } from './movies.service';
import { CoreModule } from '../core/core.module';

@NgModule({
    declarations: [MoviesRoutingModule.routedComponents],
    imports: [
        CommonModule,
        MoviesRoutingModule,
        AngularMaterialModule,
        CoreModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [MoviesService],
})

export class MoviesModule { }
