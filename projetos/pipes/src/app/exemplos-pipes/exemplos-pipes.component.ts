import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.scss']
})
export class ExemplosPipesComponent implements OnInit {

  public livro: any = {
    titulo: 'Learning JavaScript Data Structures and Algorithms 2nd ed',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 49.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'https://a.co/d/7mi4DMU'
  };

  public livros: string[] = ['Java', 'Angular'];
  public filtro!: string;

  constructor() { }

  ngOnInit(): void {
  }

  public addCurso(valor: string): void {
    this.livros.push(valor);
  }

  public obterCursos(): string[] {
    if (this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === '') {
      return this.livros;
    }

    return this.livros.filter((v) => {
      if (v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) {
        return true;
      }
      return false;
    });
  }

}
