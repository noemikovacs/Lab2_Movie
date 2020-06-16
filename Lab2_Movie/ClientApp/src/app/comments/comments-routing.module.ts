import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsComponent } from './comments.component';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { CommentsEditComponent } from './comments-edit/comments-edit.component';


const routes: Routes = [
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
    //declarations: [MoviesEditComponent, MoviesListComponent],
    //imports: [
    //  CommonModule
    //]
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CommentsRoutingModule {

    static routedComponents = [CommentsComponent, CommentsListComponent, CommentsEditComponent];

}
