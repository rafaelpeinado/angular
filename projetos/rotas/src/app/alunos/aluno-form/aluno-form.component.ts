import { AlunosService } from './../alunos.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent implements OnInit, OnDestroy {

  public aluno: any = {};
  public inscricao!: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private alunosService: AlunosService
  ) { }

  ngOnInit(): void {
    this.inscricao = this.activatedRoute.params.subscribe((params: any) => {
      this.aluno = this.alunosService.getAluno(+params['id']);
    });

    if (!this.aluno) {
      this.aluno = {};
    }
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
}
