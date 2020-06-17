import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommentsComponent } from './comments.component';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { CommentsEditComponent } from './comments-edit/comments-edit.component';


const routes2: Routes = [
    {
        path: '', component: CommentsComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: CommentsListComponent },
            { path: 'edit/:id', component: CommentsEditComponent },
            { path: 'edit', component: CommentsEditComponent },
        ]
    }
];


@NgModule({

    imports: [RouterModule.forChild(routes2)],
    exports: [RouterModule]
})
export class CommentsRoutingModule {

    static routedComponents = [CommentsComponent, CommentsListComponent, CommentsEditComponent];

}
