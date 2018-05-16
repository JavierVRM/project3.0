import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.css']
})
export class TopPageComponent implements OnInit {
  title = '';
  constructor(public sessionService: SessionService) { }

  ngOnInit() {
    this.sessionService.userEvent.subscribe( user => {
      console.log('USER EVENT');
      // if (user) {
      //   this.title = `HOLA ${user.username}`;
      // } else {
      //   this.title = 'PLIZ LOGIARSE!';
      // }
    });
  }

}
