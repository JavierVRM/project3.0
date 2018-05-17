import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { SerieService } from '../../services/serie.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  series$: Observable<any>;
  airing: any;
  popular: any;
  rated: any;
  constructor(public  serieService: SerieService) {
    serieService.getSeries().subscribe( series => {
      this.airing = series[0];
      this.popular = series[1];
      this.rated = series[2];
    });
  }
  ngOnInit() {
  }

}
