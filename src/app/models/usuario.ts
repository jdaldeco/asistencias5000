import { Curso } from './curso';

export class Usuario {

    constructor(
        public correo: string, 
        public contrasena: string,
        public cursos: Curso[] = []
    ) {}
}