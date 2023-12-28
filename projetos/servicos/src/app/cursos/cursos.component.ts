import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  public cursos: string[] = [];
  private _cursosService!: CursosService;

  constructor(

  ) {
    // instanciar manualmente não é a melhor prática, pois se precisar de um parâmetro desse construtor,
    // precisaríamos fazer toda a cadeia de importações
    this._cursosService = new CursosService();
  }

  ngOnInit(): void {
    this.cursos = this._cursosService.getCursos();
  }

}
