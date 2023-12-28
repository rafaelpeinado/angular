import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-receber-curso-criado',
  templateUrl: './receber-curso-criado.component.html',
  styleUrls: ['./receber-curso-criado.component.scss']
})
export class ReceberCursoCriadoComponent implements OnInit {

  public curso!: string;

  constructor(
    private _cursosService: CursosService,
  ) { }

  ngOnInit(): void {
    this._cursosService.emitirCursoCriado.subscribe(
      cursoCriado => this.curso = cursoCriado,
    );
  }

}
