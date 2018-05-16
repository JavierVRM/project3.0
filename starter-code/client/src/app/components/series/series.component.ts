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
  series: Array<any> = [];
  constructor(public  serieService: SerieService) {
    this.series$ = serieService.getSeries();
    serieService.getSeries().subscribe( series => this.series = series);
  }
  ngOnInit() {
  }

}
