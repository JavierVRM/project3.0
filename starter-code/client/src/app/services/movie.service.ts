import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
@Injectable()
export class MovieService {
    BASE_URL = 'http://localhost:3000';
    constructor(private http: Http) { }
    getMovies() {
        return this.http.get(`${this.BASE_URL}/api/movies`)
        .map((res) => res.json());
    }
    getGenres(genre) {
        return this.http.get(`${this.BASE_URL}/api/movies/genres/${genre}`)
        .map((res) => res.json());
    }
    getDirector(id) {
        return this.http.get(`${this.BASE_URL}/api/movies/director/${id}`)
        .map((res) => res.json());
    }
    get(id) {
        return this.http.get(`${this.BASE_URL}/api/movies/${id}`)
        .map((res) => res.json());
    }
}
