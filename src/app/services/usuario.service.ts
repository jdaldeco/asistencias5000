import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global';

import { Usuario } from '../models/usuario';

@Injectable({
    providedIn: 'root'
})
export class UsuariosService {
    public baseUrl: string;

    constructor(
        private _http: HttpClient
    ) {
        this.baseUrl = global.url;
    }
    
    getAllUsuarios(): Observable<any> {
        return this._http.get(this.baseUrl);
    }

    getUsuario(id): Observable<any> {
        return this._http.get(`${this.baseUrl}/${id}`);
    }

    createUsuario(data): Observable<any> {
        return this._http.post(this.baseUrl, data);
    }

    updateUsuario(id, data): Observable<any> {
        return this._http.put(`${this.baseUrl}/${id}`, data);
    }

    deleteUsuario(id): Observable<any> {
        return this._http.delete(`${this.baseUrl}/${id}`);
    }

    deleteAllUsuarios(): Observable<any> {
        return this._http.delete(this.baseUrl);
    }
}