import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  username: string;
  password: string;
  error: string;
  isLogin = true;

  constructor(public sessionService: SessionService, public route: ActivatedRoute, public router: Router) {}

  ngOnInit() {
    this.route
      .params
      .subscribe(params => {
        if (params['option'] === 'signup') {
          this.isLogin = false ;
        } else {
          this.isLogin = true ;
        }
      });
  }

  login() {
    console.log(this.username, this.password);
    this.sessionService.login(this.username, this.password).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  signup() {
    const user = {
      username: this.username,
      password: this.password
    };
    console.log(user);
    this.sessionService.signup(user).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
