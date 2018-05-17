import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { MovieService } from '../../services/movie.service';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  movies$: Observable<any>;
  user$: Observable<any>;
  watchlist: any;
  constructor(
    route: ActivatedRoute,
    public router: Router,
    public movieService: MovieService,
    public sessionService: SessionService,
    public userService: UserService
  ) {
    route.params.subscribe(params => {
      userService.addWatch(params).subscribe(watch => {
        this.watchlist = watch;
      })
    });
  }
//   route.params.subscribe(params => {
//     movieService.getTitle(params.title).subscribe( movies => {
//       this.pageOne = movies[0];
//       this.pageTwo = movies[1];
//     });
// });



  ngOnInit() {
  }

}
