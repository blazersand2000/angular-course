import { Pipe } from '@angular/core';

@Pipe({
   name: 'revers'
})
export class ReversePipe {
   transform(value: string) {
      return value.split("").reverse().join("");
   }
}