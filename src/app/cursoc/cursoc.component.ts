import { Component, OnInit } from '@angular/core';
import { Curso } from '../models/curso';
import { Usuario } from '../models/usuario';
import { CursosService } from '../services/curso.service';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursoc',
  templateUrl: './cursoc.component.html',
  styleUrls: ['./cursoc.component.scss'],
  providers: [CursosService]
})
export class CursocComponent implements OnInit {

  public title: string;
  public curso: Curso;
  public status: string;
  public cursos: Curso[];

  constructor(
    private _cursosService: CursosService,
    private router: Router
  ) {
    this.curso = new Curso('', 0, '', []);
  }

  ngOnInit(): void {
    this.getCursos();
  }

  /*
  * Obtiene todos los cursos registrados
  */
  getCursos() {
    this._cursosService.getAllCursos().subscribe(
      response => {
        if (response.cursos) {
          console.log(response);
          this.cursos = response.cursos;
        }
      },
      err => {
        console.log(<any>err);
      }
    );
  }


  /*updateCursos(){
    this._cursosService.updateCurso(this.nombre, this.cursos)
      .subscribe(data => {
        console.log(data);
        this.curso = new Curso();
        this.gotoList();
      }, error => console.log(error));
  }
*/
  onSubmit(form) {
    console.log(this.curso);

    /* 
    * status - Representa el valor de la peticion.
    * status = 'existing' despliega un mensaje informando 
    * que el curso registrado ya existe.
    * 
    * status = 'success' despliega un mensaje indicando que
    * se registro correctamente el curso.
    * 
    * status = 'failed' despliega un mensaje indicando que
    * no se pudo crear el curso.
    */
    // Se recorre la lista de los cursos
    if (this.cursos.length == 0) {
      this.status == "success";
    } else {
      this.cursos.forEach(cursito => {
        // Se valida que el curso ingresado no exista
        if (cursito.nombre == this.curso.nombre) {
          this.status = "existing";
        }
        // En caso de que no no haya coincidencia, se registra el curso
        else {
          this.status = "success";
        }
      });
    }

    if (this.status == "success") {
      // SUBSCRIPCION AL METODO DEL SERVICIO, QUE ACCEDE AL METODO LA API 
      // DEL SERVIDOR EL CUAL REGISTRA UN CURSO
      this._cursosService.createCurso(this.curso).subscribe(
        response => {
          if (response.curso) {
            this.status = "success"
          } else {
            this.status = "failed";
          }
          console.log(response);
          form.reset();
          this.router.navigate(['/vista-cursos']);
        },
        error => {
          console.log(<any>error);
        }
      );
    }
    this.status = "existing";
  }

}
