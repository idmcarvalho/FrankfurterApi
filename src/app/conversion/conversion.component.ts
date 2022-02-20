import { Component, OnInit } from '@angular/core';
import { currencyFormatter } from '../globalAlgorithms/currencyFormatter';
import { findCodeLabel } from '../globalAlgorithms/findCodeLabel';
import { coins } from '../models/coins';
import { conversion } from '../models/conversion';
import { RequestsService } from '../services/requests.service';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent implements OnInit {
  //boolean to show and unshow form
  showFields: boolean = false;
  //object to send to the API
  sendToConversion: conversion = new conversion();
  //object used on the ngIf at the html file
  showConversionResult: conversion = new conversion();
  //object that appears on the screen after the API call
  coin: coins = new coins();

  ratesApi:any;
  constructor(private globalAlgorithms: findCodeLabel, private requestService: RequestsService, private formatter: currencyFormatter) { }

  ngOnInit(): void {
  }

  getConvertionRate(data: conversion) {
    //Object used to show data on the screen 
    this.showConversionResult = data
    //setting forms to false
    this.showFields = false;
    //getting the code from label
    this.sendToConversion.coinFrom = this.globalAlgorithms.findCode(data.coinFrom);
    //getting the code from label
    this.sendToConversion.coinTo = this.globalAlgorithms.findCode(data.coinTo);
    //getting the code from label
    this.sendToConversion.rates = data.rates
    //Making the API request
    this.requestService.getConversion(this.sendToConversion).subscribe(response => {
      this.ratesApi = Object.values(response.rates);
      this.ratesApi = this.ratesApi.toString();
      //formatting currency 
      let valueObj = String(this.formatter.currencyFormatterByCode(this.sendToConversion.coinTo, Number(this.ratesApi)));
      //setting object
      this.coin = {
        value: valueObj
      }
    }, error => {

    })
  }

  start() {
    //setting forms to true
    this.showFields = true
    //setting coins to undefined
    this.coin.value = undefined;
  }

}
