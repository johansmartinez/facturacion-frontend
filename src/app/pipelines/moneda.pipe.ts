import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneda'
})
export class MonedaPipe implements PipeTransform {

  transform(number:number|string): unknown {
    const formato = new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 2
    })
    return formato.format(Number(number));
  }

}
