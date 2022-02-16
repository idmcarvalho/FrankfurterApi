import { Component, OnInit } from '@angular/core';
import { coins } from '../models/coins';
import { RequestsService } from '../services/requests.service';
import { findCodeLabel } from '../globalAlgorithms/findCodeLabel';
import { exportToExcel } from '../globalAlgorithms/exportToExcel';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css']
})
export class LatestComponent implements OnInit {
  //typeOfSearch variable initialization
  typeOfSearch: string = '';
  //Object that recieves the return from api
  latestRates: coins | undefined;
  //Array of objects of type latestRates
  //This array is used to show data through ngFor
  latestRatesArray: Array<coins> | undefined;
  //Date to display on the table
  date: string = new Date().toUTCString();
  //Currency code
  codeCoin: string = '';
  //swich search bar
  searchBar: boolean = true;
  //Tells the relation between coins
  baseCoin: string = '';

  constructor(private requestService: RequestsService, private globalAlgotiyhms: findCodeLabel, private exportExcel: exportToExcel) { }

  ngOnInit(): void {
  }

  searchLatestRates() {
    //this typeOfSearch recieves the type of search choosen
    this.typeOfSearch = (<HTMLInputElement>document.getElementById("inputState")).value;
    this.codeCoin = this.globalAlgotiyhms.findCode(this.typeOfSearch);
    //Service Request
    this.requestService.getAllLatestRates(this.codeCoin).subscribe(response => {
      //latesRates variable initialization
      this.latestRates = new coins();
      //latesRatesArray variable initialization
      this.latestRatesArray = []
      //converting object that came from api into array of objects
      let rawValue = Object.entries(response.rates);
      //interating over array of objects to define each object
      for (let i = 0; i <= rawValue.length - 1; i++) {
        //atribuittion to latestRatesObject
        this.latestRates = {
          label: this.globalAlgotiyhms.findLabel(rawValue[i][0]),
          coin: rawValue[i][0],
          value: String(rawValue[i][1])
        }
        //adding latestRates object to the latest rates object array
        this.latestRatesArray.push(this.latestRates)
      }
      //Switch the searchBar display
      this.searchBar = false;
      //it sends a code and recieves a label
      this.baseCoin = this.globalAlgotiyhms.findLabel(this.codeCoin)
    }, error => {
      alert('This service is not available at the moment, try again later')
    });
  }

  exportToExcel() {
    let fileName = 'Currency_Correlation'
    this.exportExcel.exportToExcel(fileName);
  }

  clear() {
    //reload the current page
    location.reload();
  }
}
