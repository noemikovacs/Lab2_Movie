import { Component, OnInit, Inject, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

    private movie: MovieWithDetails;

    constructor(
        private http: HttpClient,
        @Inject('BASE_URL') private baseUrl: string,
        @Input() private movieId: number)
    { }

    loadMovie(id: number) {
        this.http.get<MovieWithDetails>(this.baseUrl + 'api/Movies').subscribe(result => {
            this.movie = result;
            console.log(this.movie);
        }), error => console.error(error));
    }

  ngOnInit() {
  }

}

interface Comment {

    text: string;
    important: boolean;
    movieId: number;
}

interface MovieWithDetails {
    title: string;
    description: string;
    genre: string;
    durationInMin: number;
    yearOfRelease: number;
    director: string;
    dateAdded: Date;
    rating: number;
    wasWatched: boolean;
    comments: Comment[];
}
