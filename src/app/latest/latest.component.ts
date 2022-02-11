import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../services/requests.service';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css']
})
export class LatestComponent implements OnInit {
  typeOfSearch:string = '';
  constructor(private requestService:RequestsService) { }

  ngOnInit(): void {
  }

  searchLatestRates(){
    this.typeOfSearch = (<HTMLInputElement>document.getElementById("inputState")).value;
    this.requestService.getAllLatestRates().subscribe(response => {
      console.log(response)
      debugger;
    },error =>{

    });
    
  }

}
