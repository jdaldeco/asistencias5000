import { Component, OnInit, OnDestroy } from '@angular/core';
import { CursosService } from '../services/curso.service';
import { Subject } from 'rxjs';
import { Curso } from '../models/curso';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursostable',
  templateUrl: './cursostable.component.html',
  styleUrls: ['./cursostable.component.scss'],
  providers: [CursosService]
})
export class CursostableComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  public cursos: Curso[];

  constructor(
    private _cursosService: CursosService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };

    this.getCursos();
  }

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

  deleteCurso(id) {
    this._cursosService.deleteCurso(id).subscribe(
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
