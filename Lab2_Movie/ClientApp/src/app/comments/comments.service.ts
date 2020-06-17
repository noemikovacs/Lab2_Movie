import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApplicationService } from '../core/services/application.service';
import { Comment } from './comments.models';

@Injectable()
export class CommentsService {

    constructor(
        private http: HttpClient,
        private applicationService: ApplicationService) { }

    getComment(id: number) {
        return this.http.get<Comment>(`${this.applicationService.baseUrl}api/Comments/${id}`);
    }

    listComments() {
        return this.http.get<Comment[]>(`${this.applicationService.baseUrl}api/Comments`);
    }

    saveComment(movie: Comment) {
        return this.http.post(`${this.applicationService.baseUrl}api/Comments`, movie);
    }

    modifyComment(movie: Comment) {
        return this.http.put(`${this.applicationService.baseUrl}api/Comments/${movie.id}`, movie);
    }

    deleteComment(id: number) {
        return this.http.delete<any>(`${this.applicationService.baseUrl}api/Comments/${id}`);
    }
}
