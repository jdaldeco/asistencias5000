import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { global } from './global';

@Injectable({
    providedIn: 'root'
})
export class SesionesService {
    public baseUrl = global.url;

    constructor(
        private _http: HttpClient
    ) {
        this.baseUrl = global.url;
    }
    
    getAllSesiones(): Observable<any> {
        return this._http.get(this.baseUrl);
    }

    getSesion(id): Observable<any> {
        return this._http.get(`${this.baseUrl}/${id}`);
    }

    createSesion(data): Observable<any> {
        return this._http.post(this.baseUrl, data);
    }

    updateSesion(id, data): Observable<any> {
        return this._http.put(`${this.baseUrl}/${id}`, data);
    }

    deleteSesion(id): Observable<any> {
        return this._http.delete(`${this.baseUrl}/${id}`);
    }

    deleteAllSesiones(): Observable<any> {
        return this._http.delete(this.baseUrl);
    }
}