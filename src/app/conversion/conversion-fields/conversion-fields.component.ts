import { Component, OnInit, Output } from '@angular/core';
import { conversion } from 'src/app/models/conversion';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-conversion-fields',
  templateUrl: './conversion-fields.component.html',
  styleUrls: ['./conversion-fields.component.css']
})
export class ConversionFieldsComponent implements OnInit {
  conversion:conversion = new conversion();
  @Output() onConvet: EventEmitter<conversion> = new EventEmitter<conversion>();

  // onConversion;
  constructor() { }

  ngOnInit(): void {
  }

  calculate(){
    this.conversion.coinFrom = (<HTMLInputElement>document.getElementById("inputStateConversionFrom")).value;
    this.conversion.coinTo = (<HTMLInputElement>document.getElementById("inputStateConversionTo")).value;
    this.onConvet.emit(this.conversion)
  }

}
