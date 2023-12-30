import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit, OnDestroy {

  public cursos: any[] = [];
  public pagina!: number;
  private inscricao!: Subscription;

  constructor(
    private cursosService: CursosService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
    this.inscricao = this.activatedRoute.queryParams.subscribe((queryParams: any) => {
      this.pagina = queryParams['pagina'];
    });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  public proximaPagina(): void {
    // this.pagina++;
    this.router.navigate(['/cursos'], {
      queryParams: { pagina: ++this.pagina },
    });
  }
}
