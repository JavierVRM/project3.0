import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
@Injectable()
export class MovieService {
    constructor(private http: Http) { }
    getMovies() {
        return this.http.get(`${environment.BASEURL}/api/movies`)
        .map((res) => res.json());
    }
    getGenres(genre) {
        return this.http.get(`${environment.BASEURL}/api/movies/genres/${genre}`)
        .map((res) => res.json());
    }
    getDirector(id) {
        return this.http.get(`${environment.BASEURL}/api/movies/director/${id}`)
        .map((res) => res.json());
    }
    getTitle(title) {
        return this.http.get(`${environment.BASEURL}/api/movies/title/${title}`)
        .map((res) => res.json());
    }
    get(id) {
        return this.http.get(`${environment.BASEURL}/api/movies/${id}`)
        .map((res) => res.json());
    }
    // getName() {

    // }
    // getYear() {

    // }
}
