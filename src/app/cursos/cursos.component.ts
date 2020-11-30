import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from '../models/curso';
import { Observable } from "rxjs";
import { CursosService } from '../services/curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  cursos: Observable<Curso[]>;

  constructor(
    private cursosService: CursosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    
  }

 /* reloadData() {
    this.cursos = this.cursosService.getAllCursos(); 
  }

  eliminarCurso(nombre: string) {
    this.cursosService.deleteCurso(nombre)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

*/
  registrarCurso = function () {
    this.router.navigateByUrl('/cursoc');
  };


 

}
