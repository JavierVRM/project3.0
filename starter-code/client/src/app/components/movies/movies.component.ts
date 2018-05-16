import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { MovieService } from '../../services/movie.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies$: Observable<any>;
  playing: any;
  popular: any;
  rated: any;
  constructor(public  movieService: MovieService) {
    // this.movies$ = movieService.getMovies();
    movieService.getMovies().subscribe( movies => {
      this.playing = movies[0];
      this.popular = movies[1];
      this.rated = movies[2];
    });
  }
  ngOnInit() {
  }

}
