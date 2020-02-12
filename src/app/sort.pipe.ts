import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any, propName: string): any {
    if (value.length < 2) {
      return value;
    }
    var x = value.sort((a, b) => (a[propName] > b[propName]) ? 1 : -1);
    return value;
  }

}
