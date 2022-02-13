import { Component, OnInit } from '@angular/core';
import { latestRates } from '../models/latestRates';
import { RequestsService } from '../services/requests.service';
import * as XLSX from 'xlsx';
import { findCountries } from '../globalAlgorithms/findCountries';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css']
})
export class LatestComponent implements OnInit {
  //typeOfSearch variable initialization
  typeOfSearch: string = '';
  latestRates: latestRates | undefined;
  latestRatesArray: Array<latestRates> | undefined;

  constructor(private requestService: RequestsService, private globalAlgotiyhms: findCountries) { }

  ngOnInit(): void {
  }

  searchLatestRates() {
    //this typeOfSearch recieves the type of search choosen
    this.typeOfSearch = (<HTMLInputElement>document.getElementById("inputState")).value;
    //search by all rates having euro as base
    if (this.typeOfSearch == 'Get all rates') {
      //Service Request
      this.requestService.getAllLatestRates().subscribe(response => {
        //latesRates variable initialization
        this.latestRates = new latestRates();
        //latesRatesArray variable initialization
        this.latestRatesArray = []
        //converting object that came from api into array of objects
        let rawValue = Object.entries(response.rates);
        //Get the label country list to build object
        let labels = this.globalAlgotiyhms.countriesJson();
        labels = Object.entries(labels)
        //interating over array of objects to define each object
        for (let i = 0; i <= rawValue.length - 1; i++) {
              //atribuittion to latestRatesObject
              this.latestRates = {
                label:this.globalAlgotiyhms.findLabel(rawValue[i][0]),
                coin: rawValue[i][0],
                value: String(rawValue[i][1])
              }
              //adding latestRates object to the latest rates object array
              this.latestRatesArray.push(this.latestRates)
        }
      }, error => {
        alert('This service is not available at the moment, try again later')
      });
    }
    //search rate for an specific coin
    else if (this.typeOfSearch == 'Get rates from specific coin') {
      //ToDo
      alert('Get rates from specific coin')
    }
    //search for one or more coins
    else {
      //ToDo
      alert('Get one or more rates')
    }
  }

  exportToExcel() {
    let fileName = 'latestRates'
    this.globalAlgotiyhms.exportToExcel(fileName);
  }

  clear() {
    //reload the current page
    location.reload();
  }
}
