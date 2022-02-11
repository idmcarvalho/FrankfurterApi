import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) { }
  //this function does the request to the api
  getAllLatestRates(){
    let url = `https://api.frankfurter.app/latest`;
    //it returns the response
    return this.http.get<any>(url);
  }
}
