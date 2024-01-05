import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EstadoBr } from '../models/estado-br';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(
    private http: HttpClient,
  ) { }

  public getEstadosBr(): Observable<EstadoBr[]> {
    return this.http.get<EstadoBr[]>('assets/dados/estados-br.json');
  }
}
