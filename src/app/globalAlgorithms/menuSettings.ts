import { cardsModel } from "../models/cardsModel"

export class menuSettings{
    descriptions:string = ''
    cards:cardsModel = new cardsModel();
    setCards(component:string){
        if(component == 'menu'){
            this.cards = {
                title:'Frankfurter Api',
                description:'Use the buttons beside to search about currencies',
                footer:'ToDo'
            }
        }
    }
}