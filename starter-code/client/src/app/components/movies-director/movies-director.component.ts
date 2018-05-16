import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-movies-director',
  templateUrl: './movies-director.component.html',
  styleUrls: ['./movies-director.component.css']
})
export class MoviesDirectorComponent implements OnInit {
  movies$: Observable<any>;
  movies: any = {};
  byJob: any;
  bio: any;
  constructor(
    route: ActivatedRoute,
    public router: Router,
    public movieService: MovieService,
    public sessionService: SessionService
  ) {
    route.params.subscribe(params => {
        movieService.getDirector(params.id).subscribe( movies => {
          this.movies = movies;
          const byJob = this.movies[1].filter(p => {
            return p.job === 'Director';
          });
          this.byJob = byJob;
          this.bio = this.movies[0];
          console.log(this.byJob);
        });
    });
  }
  ngOnInit() {
  }
}
