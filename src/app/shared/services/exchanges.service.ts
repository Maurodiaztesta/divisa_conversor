import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExchangesService {

  constructor(private http: HttpClient) { }

  getExchange(divisa: string | null){
    return this.http.get(`https://api.vatcomply.com/rates?base=${divisa}`);
  }
}
