import { Component, OnInit, OnDestroy } from '@angular/core';
import { CursosService } from '../services/curso.service';
import { Subject } from 'rxjs';
import { Curso } from '../models/curso';


@Component({
  selector: 'app-grupostable',
  templateUrl: './grupostable.component.html',
  styleUrls: ['./grupostable.component.scss'],
  providers: [CursosService]
})
export class GrupostableComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  public grupos: String[] = [];
  public cursos: Curso[];

  public selectedCurso: String;

  constructor(
    private _cursosService: CursosService
  ) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 25
    };

    this.getCursos();
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

        this.dtTrigger.next();
      },
      err => {
        console.log(<any>err);
      }
    );
  }

  /*
  * Obtiene todos los grupos de todos los cursos
  */
  getGruposFromCurso(curso) {
    this._cursosService.getAllGruposFromCurso(curso).subscribe(
      response => {
        if (response.grupos) {
          this.grupos = response.grupos;
        }

        this.dtTrigger.next();
      },
      err => {
        console.log(<any>err);
      }
    );
  }

  deleteGrupo(curso, grupo) {
    this._cursosService.deleteGrupo(curso, grupo).subscribe(
      response => {
        if (response.cursos) {
          this.cursos = response.cursos;
        }
        this.ngOnDestroy();
      },
      err => {
        console.log(<any>err);
      }
    );
    this.ngOnInit();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
