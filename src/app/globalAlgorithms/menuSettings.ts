import { cardsModel } from "../models/cardsModel"

export class menuSettings {
    descriptions: string = ''
    cards: cardsModel = new cardsModel();
    setCards(component: string) {
        switch (component) {
            case 'menu':
                // statement 1
                this.cards = {
                    title: 'Frankfurter Api',
                    description: 'Use the buttons beside to search about currencies',
                    footer: 'ToDo',
                    photo: '../../assets/cards/menu.png'
                }
                break;
            case 'latest':
                // statement 2
                this.cards = {
                    title: 'Latest',
                    description: 'Get the latest rates from the main coins around the world',
                    footer: 'ToDo',
                    photo: '../../assets/cards/latest.png'
                }
                break;
            case 'historical':
                // statement 3
                this.cards = {
                    title: 'Historical',
                    description: 'Get the latest rates from the main coins around the world',
                    footer: 'ToDo',
                    photo: '../../assets/cards/historical.png'
                }
                break;
            case 'timeSeries':
                // statement 4
                this.cards = {
                    title: 'Time Series',
                    description: 'Get the latest rates from the main coins around the world',
                    footer: 'ToDo',
                    photo: '../../assets/cards/timeSeries.png'
                }
                break;
                case 'conversion':
                    // statement 5
                    this.cards = {
                        title: 'Conversion',
                        description: 'Get the latest rates from the main coins around the world',
                        footer: 'ToDo',
                        photo: '../../assets/cards/conversion.png'
                    }
                    break;
            default:
                // 
                break;
        }
        return this.cards;
    }
}