import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { SerieService } from '../../services/serie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.css']
})
export class SeasonComponent implements OnInit {
  series$: Observable<any>;
  series: any = {};
  constructor(
    route: ActivatedRoute,
    public router: Router,
    public serieService: SerieService,
    public sessionService: SessionService
  ) {
    route.params.subscribe(params => {
      serieService.getSeason(params.id, params.ip).subscribe(series => {
        console.log(series);
        this.series = series;
        console.log(this.series);
      });
    });
  }
  ngOnInit() {}
}
