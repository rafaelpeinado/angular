import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(
    private http: HttpClient,
  ) { }

  public consultaCEP(cep: string): Observable<any> {
    cep = cep.replace(/\D/g, '');
    if (cep) {
      const validaCep: RegExp = /^[0-9]{8}$/;
      if (validaCep.test(cep)) {
        return this.http.get<any>(`https://viacep.com.br/ws/${cep}/json`);
      }
    }
    return of({});
  }
}
