import { Component, OnInit } from '@angular/core';
import { findCodeLabel } from '../globalAlgorithms/findCodeLabel';
import { fixData } from '../globalAlgorithms/fixData';
import { coins } from '../models/coins';
import { RequestsService } from '../services/requests.service';
import { exportToExcel } from '../globalAlgorithms/exportToExcel';

@Component({
  selector: 'app-time-series',
  templateUrl: './time-series.component.html',
  styleUrls: ['./time-series.component.css']
})
export class TimeSeriesComponent implements OnInit {
  startDate:string=""
  endDate:string=""
  coins:coins | undefined;
  coinsArray:Array<coins> = []
  rawDataFromJsonDate:any;
  //calling classes that will be used on this file
  constructor(private requestService:RequestsService, private globalAlgorithms:findCodeLabel, private exportExcel: exportToExcel) { }

  ngOnInit(): void {
  }
  search(){
    //Calling the time series api
    this.requestService.getTimeSeries(this.startDate, this.endDate).subscribe(response=>{
      //parsing object into arrays
      let rawData = Object.entries(response.rates);
      //new instance of coins object
      this.coins = new coins();
      //looping over array of objects
      for(let i = 0; i <= rawData.length - 1; i++){
        //getting objects inside [i] position of the loop
        this.rawDataFromJsonDate = rawData[i][1]
        //parsing objects in [i] position into object arrays
        this.rawDataFromJsonDate = Object.entries(this.rawDataFromJsonDate)
        //looping over object arrays in [i] position
        for(let x = 0; x <= this.rawDataFromJsonDate.length - 1; x ++){
          //getting values from json request
          this.coins = {
            //retting data from the first loop
            date:rawData[i][0],
            //getting label from the second loop
            label:this.globalAlgorithms.findLabel(this.rawDataFromJsonDate[x][0]),
            //getting coin from the second loop
            coin:this.rawDataFromJsonDate[x][0],
            //getting value from the second loop
            value:this.rawDataFromJsonDate[x][1]
          }
          //pushing object into object array 
          //this object will be used by ngFor
          this.coinsArray.push(this.coins);
        }
      }
    })
  }
  exportToExcel(){
    this.exportExcel.exportToExcel("time series")
  }
}
