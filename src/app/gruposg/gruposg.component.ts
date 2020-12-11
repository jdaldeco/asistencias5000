import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Curso } from '../models/curso';
import { Grupo } from '../models/grupo';
import { CursosService } from '../services/curso.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gruposg',
  templateUrl: './gruposg.component.html',
  styleUrls: ['./gruposg.component.scss'],
})
export class GruposgComponent implements OnInit {

  public status: string;
  public title: string;
  public cursos: Curso[];
  public grupos: Grupo[];
  public grupo: Grupo;

  constructor(
    private _cursosService: CursosService,
    private router: Router
  ) {
    this.grupo = new Grupo('', '');
  }

  ngOnInit(): void {
    this.getCursos();
    this.getGrupos();
  }

  /*
  * Obtiene todos los cursos registrados
  */
  getCursos() {
    this._cursosService.getAllCursos().subscribe(
      response => {
        if (response.cursos) {
          this.cursos = response.cursos;
        }
      },
      err => {
        console.log(<any>err);
      }
    );
  }

  /*
  * Obtiene todos los grupos de todos los cursos
  */
 getGrupos() {
  this._cursosService.getAllGrupos().subscribe(
    response => {
      if (response.grupos) {
        this.grupos = response.grupos;
      }
    },
    err => {
      console.log(<any>err);
    }
  );
}

  onSubmit(form) {
    console.log(this.grupo);
    if (this.cursos.length == 0) {
      this.status == "success";
    } else {
      for (let index = 0; index < this.cursos.length; index++) {
        const cursito = this.cursos[index];
        if (this.grupo.curso == cursito.nombre) {
          this.grupos.forEach(grupini => {
            if (this.grupo.grupo == grupini.grupo) {
              this.status == "existing"
            } else {
              this.status = "success";
            }
          });
        }
      }
    }

    if (this.status == "success") {
      this._cursosService.createGrupo(this.grupo).subscribe(
        response => {
          if (response.cursos) {
            this.status = "success";
          } else {
            this.status = "failed";
          }

          console.log(response);
          form.reset();
          this.router.navigate(['/vista-grupos']);
        },
        error => {
          this.status = "failed";
          console.log(<any>error);
        }
      );
    }
    this.status = "existing";
  }
}
