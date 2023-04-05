import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exchange'
})
export class ExchangePipe implements PipeTransform {

  transform(value: number, rate: any): number {
    if (typeof rate === 'string') {
      rate = parseFloat(rate);
    }
    return value * rate;
  }

}
