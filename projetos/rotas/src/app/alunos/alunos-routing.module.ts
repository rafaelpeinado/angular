import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivateChild } from '@angular/router';
import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosGuard } from '../guards/alunos.guard';


// const routes: Routes = [
//   { path: 'alunos', component: AlunosComponent },
//   { path: 'alunos/novo', component: AlunoFormComponent },
//   { path: 'alunos/:id', component: AlunoDetalheComponent },
//   { path: 'alunos/:id/editar', component: AlunoFormComponent },
//   // a ordem das rotas importam, então tudo o que é hard coded precisa
//   // ser avaliado primeiro, para não haver colisão de rotas
//   // { path: 'alunos/novo', component: AlunoFormComponent },
// ];

const routes: Routes = [
  {
    path: '', component: AlunosComponent,
    canActivateChild: [AlunosGuard],
    children: [
      { path: 'novo', component: AlunoFormComponent },
      { path: ':id', component: AlunoDetalheComponent },
      { path: ':id/editar', component: AlunoFormComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
