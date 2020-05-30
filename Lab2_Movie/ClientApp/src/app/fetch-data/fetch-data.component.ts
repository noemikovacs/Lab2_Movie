import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {

    public movies: Movie[];

 constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        http.get<Movie[]>(baseUrl + 'api/movies').subscribe(result => {
            this.movies = result;
        }, error => console.error(error));
    }
}


interface Movie {
  title: string;
  description: string;
  genre: string;
  durationInMin: number;
  yearOfRelease: number;
  director: string;
  dateAdded: Date;
  rating: number;
  wasWatched: boolean;
}
