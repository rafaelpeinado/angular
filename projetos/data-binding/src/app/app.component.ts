import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public valor: number = 5;
  public deletarCiclo: boolean = false;

  public mudarValor(): void {
    this.valor++;
  }

  public destruirCiclo(): void {
    this.deletarCiclo = true;
  }
}
