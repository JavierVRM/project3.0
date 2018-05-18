import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { SerieService } from '../../services/serie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-series-detail',
  templateUrl: './series-detail.component.html',
  styleUrls: ['./series-detail.component.css']
})
export class SeriesDetailComponent implements OnInit {
  series$: Observable<any>;
  series: any = {};
  constructor(
    route: ActivatedRoute,
    public router: Router,
    public serieService: SerieService,
    public sessionService: SessionService
  ) {
    route.params.subscribe(params => {
      serieService.get(params.id).subscribe(series => {
        console.log(series);
        this.series = series[0];
        this.series.similars = series[1];
        console.log(this.series);
      });
    });
  }
  ngOnInit() {}
}
