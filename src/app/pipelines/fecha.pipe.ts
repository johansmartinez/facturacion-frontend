import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fecha'
})
export class FechaPipe implements PipeTransform {

  transform(date:string): unknown {
    return new Date(date).toISOString().split('T')[0];
  }

}
