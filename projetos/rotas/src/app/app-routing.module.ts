import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
// import { AlunosGuard } from './guards/alunos.guard';
// import { CursosComponent } from './cursos/cursos.component';
// import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
// import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';

const routes: Routes = [
  // nova foram de fazer lazy loading
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module')
      .then(m => m.CursosModule),
    canActivate: [AuthGuard],
    canActivateChild: [CursosGuard],
    canLoad: [AuthGuard],
  },
  {
    path: 'alunos',
    loadChildren: () => import('./alunos/alunos.module')
      .then(m => m.AlunosModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    // canActivateChild: [AlunosGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard], },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // o ideal é colocar o não encontrado no final, pois o Angular
  // faz uma verificação sequencial
  // ** wildcard, para que esse caminho renderize pagina não encontrada
  {
    path: '**',
    component: PaginaNaoEncontradaComponent,
    // a ideia é usar para que redirecione para a página de login
    // caso não esteja logado ainda, pois só se estiver logado
    // cai em página não encontrada
    canActivate: [AuthGuard],
  },

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
