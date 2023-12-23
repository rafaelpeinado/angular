import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {

  public nome: string = 'abc';
  public pessoa: any = {
    nome: 'def',
    idade: 20,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
