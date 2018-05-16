import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css']
})
export class MoviesDetailComponent implements OnInit {
  movies$: Observable<any>;
  movies: any = {};
  constructor(
    route: ActivatedRoute,
    public router: Router,
    public movieService: MovieService,
    public sessionService: SessionService
  ) {
    route.params.subscribe(params => {
        movieService.get(params.id).subscribe( movies => {
          this.movies = movies[0];
          this.movies.director = movies[1];
          this.movies.similars = movies [2];
          console.log(this.movies.director);
        });
    });
  }
  ngOnInit() {
  }
}
