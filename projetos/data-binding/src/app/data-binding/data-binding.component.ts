import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {


  public url: string = 'http://loiane.com';
  public cursoAngular: boolean = true;
  public urlImagem = 'http://lorempixel.com.br/400/200/nature';

  constructor() { }

  ngOnInit(): void {
  }

  public getCurtirCurso(): boolean {
    return true;
  }

  public getValor(): number {
    return 1;
  }

}
