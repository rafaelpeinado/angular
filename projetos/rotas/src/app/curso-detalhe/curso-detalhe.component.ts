import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss']
})
export class CursoDetalheComponent implements OnInit {
  public id!: string;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    console.log(this.activatedRoute);
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
  }
}
