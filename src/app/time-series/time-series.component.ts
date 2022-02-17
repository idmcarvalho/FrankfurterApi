import { Component, OnInit } from '@angular/core';
import { fixData } from '../globalAlgorithms/fixData';
import { RequestsService } from '../services/requests.service';

@Component({
  selector: 'app-time-series',
  templateUrl: './time-series.component.html',
  styleUrls: ['./time-series.component.css']
})
export class TimeSeriesComponent implements OnInit {
  startDate:string=""
  endDate:string=""
  
  constructor(private requestService:RequestsService, private globalAlgorithms:fixData) { }

  ngOnInit(): void {
  }
  search(){
    
    this.requestService.getTimeSeries(this.startDate, this.endDate).subscribe(response=>{
      console.log(response)
      debugger
    })
  }
}
