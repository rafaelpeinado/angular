import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }

  public getCursos(): any[] {
    return [
      { id: 1, nome: 'Angular' },
      { id: 2, nome: 'Java' },
    ];
  }

  public getCurso(id: number): any {
    return this.getCursos()
      .find((curso) => curso.id === id);
  }
}
