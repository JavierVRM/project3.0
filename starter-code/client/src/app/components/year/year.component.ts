import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent implements OnInit {
  movies$: Observable<any>;
  pageOne: any;
  pageTwo: any;
  pageThree: any;
  pageFour: any;
  pageFive: any;
  myYear: any;
  constructor(
    public  movieService: MovieService,
    route: ActivatedRoute,
    public router: Router
  ) {
      route.params.subscribe(params => {
        movieService.getYear(params.year).subscribe( movies => {
          console.log(movies);
          this.pageOne = movies[0];
          this.pageTwo = movies[1];
          this.pageThree = movies[2];
          this.pageFour = movies[3];
          this.pageFive = movies[4];
        });
    });
  }

  ngOnInit() {
  }

}
