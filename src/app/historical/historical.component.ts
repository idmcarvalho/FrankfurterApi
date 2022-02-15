import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../services/requests.service';

@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.css']
})
export class HistoricalComponent implements OnInit {
  data:string = '';
  constructor(private requestService:RequestsService) { }

  ngOnInit(): void {
  }

  search(){
    this.requestService.getHistorical(this.data).subscribe(response => {
      debugger;
      console.log(response)
    }, error => {

    })
  }

}
