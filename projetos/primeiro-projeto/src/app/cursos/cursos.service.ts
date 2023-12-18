import { Injectable } from '@angular/core';

/*@Injectable({
  providedIn: 'root'
})*/
@Injectable()
export class CursosService {

  constructor() { }

  getCursos(): string[] {
    return ['Java', 'Ext JS', 'Angular'];
  }
}
