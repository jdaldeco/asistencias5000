import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { DndDirective } from './asistencias5000.directive';
import { DndComponent } from './dnd/dnd.component';
import { ProgressComponent } from './progress/progress.component';

import { DataTablesModule } from 'angular-datatables';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CursostableComponent } from './cursostable/cursostable.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursocComponent } from './cursoc/cursoc.component';
import { HomeComponent } from './home/home.component';
import { GruposComponent } from './grupos/grupos.component';
import { GrupostableComponent } from './grupostable/grupostable.component';
import { GruposgComponent } from './gruposg/gruposg.component';

@NgModule({
  declarations: [
    AppComponent,
    DndDirective,
    DndComponent,
    ProgressComponent,
    CursostableComponent,
    CursosComponent,
    CursocComponent,
    HomeComponent,
    GruposComponent,
    GrupostableComponent,
    GruposgComponent
  ],
  imports: [
    BrowserModule,
    routing,
    DataTablesModule,
    MatTableModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents:[],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
