import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {
  public id!: string;
  public curso!: any;
  private inscricao!: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cursosService: CursosService
  ) {
    console.log(this.activatedRoute);
    // não acontece mudanças, pois estamos usando no construtor e além disso,
    // snapshot pega a foto apenas da primeira rota
    // this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.inscricao = this.activatedRoute.params.subscribe(
      (params: any) => {
        this.id = params.id;
        this.curso = this.cursosService.getCurso(+this.id);
        if (!this.curso) {
          this.router.navigate(['/nao-encontrado']);
        }
      });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
}
