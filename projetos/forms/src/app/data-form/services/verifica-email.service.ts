import { delay, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerificaEmailService {

  constructor(
    private http: HttpClient,
  ) { }

  public verificarEmail(email: string): Observable<boolean> {
    return this.http.get<{ emails: any[] }>('assets/dados/verificar-email.json')
      .pipe(
        delay(2000),
        map((dados: { emails: any[] }) => dados.emails),
        // tap(console.log),
        map((dados: { email: string }[]) => dados.filter((item) => item.email === email)),
        // tap(console.log),
        map((dados: { email: string }[]) => dados.length > 0),
        // tap(console.log),
      );
  }
}
