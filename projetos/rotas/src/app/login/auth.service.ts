import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;
  public mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  public fazerLogin(usuario: Usuario): void {
    if (usuario.nome === 'usuario@email.com' && usuario.senha === '123456') {
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/']);
      return;
    }
    this.usuarioAutenticado = false;
    this.mostrarMenuEmitter.emit(false);
  }
}
