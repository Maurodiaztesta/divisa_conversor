import { Component, OnInit } from '@angular/core';
import { ExchangesService } from './shared/services/exchanges.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular_exchanges';

  exchanges?: any;
  value: any = 1;
  valueMulti: any;
  selectedCurrency: any = "EUR";
 


  constructor(private exchangesService: ExchangesService, private router: Router) {}

  ngOnInit(): void {
    this.exchangesService.getExchange("EUR").subscribe((res: any) => {
      this.exchanges = res;
      this.updateValue();
    });
  }

  updateValue() {
    if (this.exchanges) {
      this.value = +this.value;
      this.valueMulti = {};
  
      for (const divisa of Object.keys(this.exchanges.rates)) {
        const rate = this.exchanges.rates[divisa];
        this.valueMulti[divisa] = this.value * parseFloat(rate);
      }
  
      this.exchangesService.getExchange(this.selectedCurrency).subscribe((res: any) => {
        this.exchanges = res;
      });
    }
  }


}

