import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { conversion } from '../models/conversion';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) { }
  //this function does the request to the api
  getAllLatestRates(coin:string){
    let url = `https://api.frankfurter.app/latest?from=${coin}`;
    //it returns the response
    return this.http.get<any>(url);
  }

  getHistorical(date:string){
    let url = `https://api.frankfurter.app/${date}`;
    return this.http.get<any>(url);
  }

  getConversion(comparison:conversion){
    let url = `https://api.frankfurter.app/latest?amount=${comparison.rates}&from=${comparison.coinFrom}&to=${comparison.coinTo}`;
    return this.http.get<any>(url);
  }
  getTimeSeries(startDate:string, endDate:string){
    let url = `https://api.frankfurter.app/${startDate}..${endDate}`;
    console.log(url)
    return this.http.get<any>(url);
  }
}
