import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.scss'],
  providers: [CursosService],
})
export class CriarCursoComponent implements OnInit {

  public cursos: string[] = [];

  constructor(
    private _cursosService: CursosService,
  ) { }

  ngOnInit(): void {
    this.cursos = this._cursosService.getCursos();
  }

  public onAddCurso(curso: string): void {
    this._cursosService.addCurso(curso);
  }
}
