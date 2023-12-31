import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  public aluno: any;
  private inscricao!: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService,
  ) { }

  ngOnInit(): void {
    this.inscricao = this.activatedRoute.params.subscribe((params: any) => {
      this.aluno = this.alunosService.getAluno(+params['id']);
    });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  public editarContato(): void {
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }
}
