import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
import { Movie, Genre } from '../movies.models';

@Component({
  selector: 'app-movies-edit',
  templateUrl: './movies-edit.component.html',
  styleUrls: ['./movies-edit.component.css']
})
export class MoviesEditComponent implements OnInit {

    private routerLink: string = '../list';

    private movieID: number;

    private isEdit: boolean = false;

    public formGroup: FormGroup;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private moviesService: MoviesService,
        private formBuilder: FormBuilder) { }

    ngOnInit() {

        this.movieID = parseInt(this.route.snapshot.params['id']);

        if (this.movieID) {
            this.routerLink = '../../list';

            this.moviesService.getMovie(this.movieID).subscribe(res => {
                this.initForm(res);
                this.isEdit = true;
            });
        }
        else {
            this.initForm(<Movie>{});
        }
    }

    save() {
        Object.keys(this.formGroup.controls).forEach(control => {
            this.formGroup.get(control).markAsTouched();
        });

        if (this.formGroup.valid) {
            let movie = this.formGroup.value as Movie;
            movie.title = "bububu";

            if (this.isEdit) {
                movie.id = this.movieID;

                this.moviesService.modifyMovie(movie).subscribe(res => {
                    this.router.navigate(['/movies']);
                });
            } else {

                this.moviesService.saveMovie(movie).subscribe(res => {
                    this.router.navigate(['/movies']);
                });
            }
        }
    }

    initForm(movie: Movie) {
        this.formGroup = this.formBuilder.group({
            title: [movie.title, Validators.required],
            description: [movie.description, Validators.required],
            genre: [movie.genre, Validators.required],
            durationInMin: [movie.durationInMin, Validators.required],
            yearOfRelease: [movie.yearOfRelease, Validators.required],
            director: [movie.director, Validators.required],
            dateAdded: [movie.dateAdded, Validators.required]
        });
    }
}
