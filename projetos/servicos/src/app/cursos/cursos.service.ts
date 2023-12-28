import { Injectable } from "@angular/core";

@Injectable() // é uma classe injetável
export class CursosService {
  public getCursos(): string[] {
    return ['Angular', 'Java', 'Phonegap'];
  }

}
