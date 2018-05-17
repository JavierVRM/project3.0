import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  movies$: Observable<any>;
  pageOne: any;
  pageTwo: any;
  myTitle: any;
  constructor(
    public  movieService: MovieService,
    route: ActivatedRoute,
    public router: Router
  ) {
      route.params.subscribe(params => {
        movieService.getTitle(params.title).subscribe( movies => {
          console.log(movies);
          this.pageOne = movies[0];
          this.pageTwo = movies[1];
        });
    });
  }

  ngOnInit() {
  }

}
