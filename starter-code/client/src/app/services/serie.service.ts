import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
@Injectable()
export class SerieService {
    BASE_URL = 'http://localhost:3000';
    constructor(private http: Http) { }
    getSeries() {
        return this.http.get(`${this.BASE_URL}/api/series`)
        .map((res) => res.json());
    }
    getGenres(genre) {
        return this.http.get(`${this.BASE_URL}/api/series/genres/${genre}`)
        .map((res) => res.json());
    }
    get(id) {
        return this.http.get(`${this.BASE_URL}/api/series/${id}`)
        .map((res) => res.json());
    }
}
