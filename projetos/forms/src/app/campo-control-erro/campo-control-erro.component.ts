import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-campo-control-erro',
  templateUrl: './campo-control-erro.component.html',
  styleUrls: ['./campo-control-erro.component.scss']
})
export class CampoControlErroComponent implements OnInit {

  @Input() public mostrarErro!: boolean | null;
  @Input() public mensagemErro: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  // !nome.valid && nome.touched
}
