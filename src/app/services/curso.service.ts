import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { global } from './global';
import { Curso } from '../models/curso';
import { Grupo } from '../models/grupo';

@Injectable({
    providedIn: 'root'
})
export class CursosService {
    public baseUrl: string;

    constructor(
        private _http: HttpClient
    ) {
        this.baseUrl = global.url;
    }

    getAllCursos(): Observable<any> {
        var headers = new HttpHeaders().set('Content-type', 'application/json');
        return this._http.get(this.baseUrl + '/cursos', {headers: headers});
    }

    getCurso(id): Observable<any> {
        var headers = new HttpHeaders().set('Content-type', 'application/json')

        return this._http.put(this.baseUrl + `/cursos/` + id, {headers: headers});
    }

    createCurso(curso: Curso): Observable<any> {
        var params = JSON.stringify(curso);
        var headers = new HttpHeaders().set('Content-type', 'application/json');

        return this._http.post(this.baseUrl + '/cursos', params, {headers: headers});
    }

    updateCurso(curso): Observable<any> {
        var params = JSON.stringify(curso);
        var headers = new HttpHeaders().set('Content-type', 'application/json')

        return this._http.put(this.baseUrl + '/cursos/' + curso._id, params, {headers: headers});
    }

    deleteCurso(id): Observable<any> {
        var headers = new HttpHeaders().set('Content-type', 'application/json')

        return this._http.delete(this.baseUrl + '/cursos/' + id, {headers: headers});
    }

    findByNombre(nombre): Observable<any> {
        var headers = new HttpHeaders().set('Content-type', 'application/json');
        return this._http.get(this.baseUrl + `/cursos/${nombre}`, {headers: headers});
    }

    // ----------------     GRUPOS     ------------------
    getAllGruposFromCurso(curso: String): Observable<any> {
        var headers = new HttpHeaders().set('Content-type', 'application/json');
        return this._http.get(this.baseUrl + '/grupos/' + curso, {headers: headers});
    }

    getAllGrupos(): Observable<any> {
        var headers = new HttpHeaders().set('Content-type', 'application/json');
        return this._http.get(this.baseUrl + '/grupos', {headers: headers});
    }

    createGrupo(grupo: Grupo): Observable<any> {
        var params = JSON.stringify(grupo);
        var headers = new HttpHeaders().set('Content-type', 'application/json');

        return this._http.post(this.baseUrl + '/grupos', params, {headers: headers});
    }

    getGrupo(curso, grupo: String): Observable<any> {
        var headers = new HttpHeaders().set('Content-type', 'application/json');
        return this._http.get(this.baseUrl + '/grupos/' + curso.nombre + '/grupo', {headers: headers});
    }

    updateGrupo(curso, update: String): Observable<any> {
        var params = JSON.stringify(curso);
        var headers = new HttpHeaders().set('Content-type', 'application/json')

        return this._http.put(this.baseUrl + '/cursos/' + curso.nombre, params, {headers: headers});
    }

    deleteGrupo(curso, grupo): Observable<any> {
        var headers = new HttpHeaders().set('Content-type', 'application/json')

        return this._http.delete(this.baseUrl + '/grupos/' + curso + '/' + grupo, {headers: headers});
    }
}
