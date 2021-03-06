import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursostableComponent } from './cursostable/cursostable.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursocComponent } from './cursoc/cursoc.component';
import { GrupostableComponent } from './grupostable/grupostable.component';
import { GruposComponent } from './grupos/grupos.component';
import { GruposgComponent } from './gruposg/gruposg.component';
import { ReadCSVComponent } from './read-csv/read-csv.component';


import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cursos-table', component: CursostableComponent },
    { path: 'vista-cursos', component: CursosComponent },
    { path: 'cursoc', component: CursocComponent },
    { path: 'vista-grupos', component: GruposComponent }, 
    { path: 'gruposg', component: GruposgComponent }, 
    { path: 'grupos-table', component: GrupostableComponent },
    { path: 'tabla-archivos', component: ReadCSVComponent}

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);