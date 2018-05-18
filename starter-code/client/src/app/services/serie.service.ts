import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
@Injectable()
export class SerieService {
    constructor(private http: Http) { }
    getSeries() {
        return this.http.get(`${environment.BASEURL}/api/series`)
        .map((res) => res.json());
    }
    getGenres(genre) {
        return this.http.get(`${environment.BASEURL}/api/series/genres/${genre}`)
        .map((res) => res.json());
    }
    get(id) {
        return this.http.get(`${environment.BASEURL}/api/series/${id}`)
        .map((res) => res.json());
    }
    getSeason(id, ip) {
        return this.http.get(`${environment.BASEURL}/api/series/${id}/${ip}`)
        .map((res) => res.json());
    }
}
