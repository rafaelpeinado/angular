import { EventEmitter, Injectable } from "@angular/core";
import { LogService } from "../shared/log.service";

@Injectable() // é uma classe injetável
export class CursosService {

  public emitirCursoCriado = new EventEmitter<string>();
  public static criouNovoCursos = new EventEmitter<string>();

  private cursos: string[] = ['Angular', 'Java', 'Phonegap'];

  constructor(
    private _logService: LogService,
  ) {
    // para ver quantas vezes a classe foi instanciada
    console.log('CursosService');
  }

  public getCursos(): string[] {
    this._logService.consoleLog('Obtendo lista de cursos');
    return this.cursos;
  }

  public addCurso(curso: string): void {
    // this._logService.consoleLog('Criando um novo curso ' + curso);
    this._logService.consoleLog(`Criando um novo curso ${curso}`);
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCursos.emit(curso);
  }
}
