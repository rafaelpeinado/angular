import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
  // inputs: ['nomeCurso:nome']
})
export class InputPropertyComponent implements OnInit {
  @Input('nome') nomeCurso: string = '';
  // se usar a property input, usaria assim
  // nomeCurso: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
