//import { Grupo } from './grupo';

export class Sesion {

    constructor(
        public nombreAlumno: string,
        public asistencia: [Date[], boolean[]],
        public unidadC: number, 
        public grupo: String,
        public curso: String
    ) {}
}