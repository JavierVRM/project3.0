import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  movies$: Observable<any>;
  pageOne: any;
  pageTwo: any;
  myTitle: any;
  byName: string;
  constructor(
    public  movieService: MovieService,
    route: ActivatedRoute,
    public router: Router
  ) {
    //   route.params.subscribe(title => {
    //     movieService.getTitle(title.id).subscribe( movies => {
    //       this.pageOne = movies[0];
    //       this.pageTwo = movies[1];
    //     });
    // });
  }

  ngOnInit() {
  }

}
