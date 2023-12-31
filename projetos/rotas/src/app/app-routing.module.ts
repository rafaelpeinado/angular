import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import { CursosComponent } from './cursos/cursos.component';
// import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
// import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';

const routes: Routes = [
  // nova foram de fazer lazy loading
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module')
      .then(m => m.CursosModule),
  },
  {
    path: 'alunos',
    loadChildren: () => import('./alunos/alunos.module')
      .then(m => m.AlunosModule),
  },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },

  // esse método de lazy loading é antigo
  // { path: 'cursos', loadChildren: 'app/cursos/cursos.module#CursosModule' },

  // { path: 'cursos', component: CursosComponent },
  // { path: 'curso/:id', component: CursoDetalheComponent },
  // { path: 'nao-encontrado', component: CursoNaoEncontradoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
