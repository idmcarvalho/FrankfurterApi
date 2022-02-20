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
                    description: 'The Frankfurter API tracks foreign exchange references rates published by the European Central Bank. The data refreshes around 16:00 CET every working day. Frankfurter integrates seamlessly with libraries like Money.js and Dinero.js.',
                    footer: 'https://api.frankfurter.app/${parameters}',
                    photo: '../../assets/cards/menu.png'
                }
                break;
            case 'latest':
                // statement 2
                this.cards = {
                    title: 'Latest',
                    description: 'This endpoint returns the latest rates. We added a feature to export these rates to excel, so it is possible to get these dates and create an analysis',
                    footer: 'https://api.frankfurter.app/latest',
                    photo: '../../assets/cards/latest.png'
                }
                break;
            case 'historical':
                // statement 3
                this.cards = {
                    title: 'Historical',
                    description: 'This endpoint returns historical rates for any working day since 4 January 1999.',
                    footer: 'https://api.frankfurter.app/1999-01-04',
                    photo: '../../assets/cards/historical.png'
                }
                break;
            case 'timeSeries':
                // statement 4
                this.cards = {
                    title: 'Time Series',
                    description: 'Be careful when choosing very long periods, in some tests the browser crashed and had to be restarted. The longest period from 1999 to today returns around 36,000 rows.',
                    footer: 'https://api.frankfurter.app/2020-01-01..2020-01-31',
                    photo: '../../assets/cards/timeSeries.png'
                }
                break;
            case 'conversion':
                // statement 5
                this.cards = {
                    title: 'Conversion',
                    description: 'You can convert any value between currencies using the above endpoints in combination with the amount parameter.',
                    footer: 'https://api.frankfurter.app/latest/?amount=10&from=GBP&to=USD',
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