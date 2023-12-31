import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable()
export class AlunosGuard implements CanActivateChild {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (state.url.includes('editar')) {
      alert('Usuário sem acesso');
      // return false;
      return of(false);
    }
    return true;
  }
}
