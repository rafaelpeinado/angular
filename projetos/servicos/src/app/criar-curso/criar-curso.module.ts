import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CriarCursoComponent } from './criar-curso.component';
import { CursosService } from '../cursos/cursos.service';
import { ReceberCursoCriadoComponent } from '../receber-curso-criado/receber-curso-criado.component';


@NgModule({
  declarations: [
    CriarCursoComponent,
    ReceberCursoCriadoComponent
  ],
  imports: [
    CommonModule
    // BrowserModule é removido, pois é módulo de funcionalidade. BrowserModule é para module root
  ],
  exports: [
    CriarCursoComponent
  ],
  // providers: [CursosService]
})
export class CriarCursoModule { }
