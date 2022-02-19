import { Component, OnInit } from '@angular/core';
import { menuSettings } from '../globalAlgorithms/menuSettings';
import { cardsModel } from '../models/cardsModel';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuCards:cardsModel = new cardsModel();
  constructor(private menuSetting:menuSettings) { }

  ngOnInit(): void {
    this.menuCards = this.menuSetting.setCards('menu');
  }

  changeCard(component:string){
    this.menuCards = this.menuSetting.setCards(component);
  }

}
