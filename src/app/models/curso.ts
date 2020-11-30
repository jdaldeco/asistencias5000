//import { Grupo } from './grupo';
import { Usuario } from './usuario';

export class Curso {
    constructor(
        public nombre: string,
        public unidades: number,
        public usuario: string,
        public grupos: String[] = []

    ) { }
}