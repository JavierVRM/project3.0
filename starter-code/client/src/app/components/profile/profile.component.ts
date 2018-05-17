import { Component, OnInit } from "@angular/core";
import { SessionService } from '../../services/session.service';
import { MovieService } from "../../services/movie.service";
import { UserService } from "../../services/user.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  movies$: Observable<any>;
  user: any;
  watchlist: Array<any>;
  constructor(
    public sessionService: SessionService,
    route: ActivatedRoute,
    public router: Router,
    public movieService: MovieService,
    public userService: UserService
  ) {
    this.sessionService.isLoggedIn().subscribe( u => this.user = u)
  }

  ngOnInit() {
    this.lalal();
  }
  lalal() {
    // this.sessionService.isLoggedIn().subscribe( u => this.user = u)
    console.log(this.user);
    this.sessionService.user.watchlist.forEach(m => {
      console.log(m);
      this.movieService.get(m).subscribe(movie => {
        this.watchlist.push(movie);
        console.log(this.watchlist);
      });
    });
  }
}
