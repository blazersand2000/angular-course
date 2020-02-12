import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
    var valueAsArray = value.split('');
    valueAsArray = valueAsArray.reverse();
    return valueAsArray.join('');
  }

}
