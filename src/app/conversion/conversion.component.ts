import { Component, OnInit } from '@angular/core';
import { findCodeLabel } from '../globalAlgorithms/findCodeLabel';
import { conversion } from '../models/conversion';
import { RequestsService } from '../services/requests.service';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent implements OnInit {
  showFields:boolean = false;
  sendToConversion:conversion = new conversion();
  constructor(private globalAlgorithms:findCodeLabel,private requestService:RequestsService) { }

  ngOnInit(): void {
  }

  getConvertionRate(data:conversion){ 
     this.sendToConversion.coinFrom = this.globalAlgorithms.findCode(data.coinFrom);
     this.sendToConversion.coinTo = this.globalAlgorithms.findCode(data.coinTo);
     this.sendToConversion.amount = data.amount
     this.requestService.getConversion(this.sendToConversion).subscribe(response => {
      console.log(response);
     },error => {

     })
  }

}
