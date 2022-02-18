import { Component, OnInit } from '@angular/core';
import { findCodeLabel } from '../globalAlgorithms/findCodeLabel';
import { fixData } from '../globalAlgorithms/fixData';
import { coins } from '../models/coins';
import { RequestsService } from '../services/requests.service';

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
  constructor(private requestService:RequestsService, private globalAlgorithms:findCodeLabel) { }

  ngOnInit(): void {
  }
  search(){
    this.requestService.getTimeSeries(this.startDate, this.endDate).subscribe(response=>{
      let rawData = Object.entries(response.rates);
      this.coins = new coins();
      //todo
      for(let i = 0; i <= rawData.length - 1; i++){
        this.rawDataFromJsonDate = rawData[i][1]
        this.rawDataFromJsonDate = Object.entries(this.rawDataFromJsonDate)
        for(let x = 0; x <= this.rawDataFromJsonDate.length - 1; x ++){
          this.coins = {
            date:rawData[i][0],
            label:this.globalAlgorithms.findLabel(this.rawDataFromJsonDate[x][0]),
            coin:this.rawDataFromJsonDate[x][0],
            value:this.rawDataFromJsonDate[x][1]
          }
          this.coinsArray.push(this.coins);
        }
        console.log(this.coinsArray)
      }
    })
  }
}
