import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  movies$: Observable<any>;
  pageOne: any;
  pageTwo: any;
  pageThree: any;
  pageFour: any;
  pageFive: any;
  myGenre: any;
  constructor(
    public  movieService: MovieService,
    route: ActivatedRoute,
    public router: Router
  ) {
    route.params.subscribe(genre => {
      this.myGenre = genre;
      movieService.getGenres(genre.genre).subscribe( movies => {
        this.pageOne = movies[0];
        this.pageTwo = movies[1];
        this.pageThree = movies[2];
        this.pageFour = movies[3];
        this.pageFive = movies[4];
      });
  });
  }
  // route.params.subscribe(genre => {
  //   this.movies$ = movieService.getGenres(genre);
  //   movieService.getGenres(genre).subscribe( movies => this.movies = movies);
  // });
  ngOnInit() {
  }

}
