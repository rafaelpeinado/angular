import { Pipe } from '@angular/core';
import { FiltroArrayPipe } from './filtro-array.pipe';

@Pipe({
  name: 'filtroArrayImpuro',
  pure: false, // pop padrão tem  valor de true
})

// extends significa que estamos herdando o FiltroArrayPipe e vai usar a implementação de transform do FiltroArrayPipe
export class FiltroArrayImpuroPipe extends FiltroArrayPipe {

}
