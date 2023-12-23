import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
  // styles: [
  //   `
  //     .highlight {
  //       background-color: yellow;
  //       font-weight: bold;
  //     }
  //   `
  // ]
})
export class DataBindingComponent implements OnInit {


  public url: string = 'http://loiane.com';
  public cursoAngular: boolean = true;
  public urlImagem = 'http://lorempixel.com.br/400/200/nature';

  public valorAtual: string = '';
  public valorSalvo: string = '';

  public isMouseOver: boolean = false;

  public nomeDoCurso: string = 'Angular';

  public valorInicial: number = 15;

  constructor() { }

  ngOnInit(): void {
  }

  public getCurtirCurso(): boolean {
    return true;
  }

  public getValor(): number {
    return 1;
  }

  public botaoClicado(): void {
    alert('Botão clicado!');
  }

  public onKeyUp(event: KeyboardEvent): void {
    // console.log((<HTMLInputElement>event.target).value);
    this.valorAtual = (<HTMLInputElement>event.target).value;
  }

  public salvarValor(valor: any): void {
    this.valorSalvo = valor;
  }

  public onMouseOverOut(): void {
    this.isMouseOver = !this.isMouseOver;
  }

  public onMudouValor(event: any): void {
    console.log(event.novoValor);
  }
}
