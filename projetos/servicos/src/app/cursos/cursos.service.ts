import { EventEmitter, Injectable } from "@angular/core";

@Injectable() // é uma classe injetável
export class CursosService {

  public emitirCursoCriado = new EventEmitter<string>();
  public static criouNovoCursos = new EventEmitter<string>();

  private cursos: string[] = ['Angular', 'Java', 'Phonegap'];

  constructor() {
    // para ver quantas vezes a classe foi instanciada
    console.log('CursosService');
  }

  public getCursos(): string[] {
    return this.cursos;
  }

  public addCurso(curso: string): void {
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCursos.emit(curso);
  }
}
