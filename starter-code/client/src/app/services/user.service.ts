import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {

constructor(
    private http: Http
) { }
    addWatch(id, idMovie) {
        return this.http.get(`${environment.BASEURL}/api/user/${id}/${idMovie}`)
        .map((res) => res.json());
    }
}
