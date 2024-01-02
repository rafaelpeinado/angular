import { AlunosService } from './../alunos.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IFromDeactivate } from 'src/app/guards/iform-candeactivate';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent implements OnInit, OnDestroy, IFromDeactivate {

  public aluno: any = {};
  public inscricao!: Subscription;
  private formMudou: boolean = false;

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

  public onInput(): void {
    this.formMudou = true;
    console.log('mudou');
  }

  public podeMudarRota(): boolean {
    if (this.formMudou) {
      confirm('Tem certeza que deseja sair dessa página?');
    }
    return true;
  }

  public podeDesativar(): boolean {
    return this.podeMudarRota();
  }
}
