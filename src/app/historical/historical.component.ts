import { Component, OnInit } from '@angular/core';
import { exportToExcel } from '../globalAlgorithms/exportToExcel';
import { findCodeLabel } from '../globalAlgorithms/findCodeLabel';
import { coins } from '../models/coins';
import { RequestsService } from '../services/requests.service';

@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.css']
})
export class HistoricalComponent implements OnInit {
  data:string = '';
  historicalRates: coins | undefined;
  historicalRatesArray: Array<coins> | undefined;
  constructor(private requestService:RequestsService, private globalAlgorithms:findCodeLabel, private exportExcel:exportToExcel) { }

  ngOnInit(): void {
  }

  search(){
    this.requestService.getHistorical(this.data).subscribe(response => {
      this.historicalRates=new coins()
      this.historicalRatesArray=[]
      let rawData=Object.entries(response.rates);
      for(let i=0; i<=rawData.length-1;i++){
        this.historicalRates={
          label:this.globalAlgorithms.findLabel(rawData[i][0]),
          coin:rawData[i][0],
          value: String(rawData[i][1])
        }
        this.historicalRatesArray.push(this.historicalRates)
      }


console.log(this.historicalRatesArray)
    }, error => {

    })
  }
  exportToExcel(){
    let fileName = 'historicalExcel'
    this.exportExcel.exportToExcel(fileName)
  }
}
