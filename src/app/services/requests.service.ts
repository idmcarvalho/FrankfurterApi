import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) { }

  getAllLatestRates(){
    let url = `https://api.frankfurter.app/latest`;
    return this.http.get<any>(url);
  }
}
