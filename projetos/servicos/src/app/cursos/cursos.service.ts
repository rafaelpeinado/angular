import { Injectable } from "@angular/core";

@Injectable() // é uma classe injetável
export class CursosService {

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
  }
}
