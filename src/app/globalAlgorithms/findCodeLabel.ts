export class findCodeLabel {
    labelCoins: any;
    //This funtcion returns the relation between codes and labels on Json format
    countriesJson() {
        this.labelCoins = {
            "AUD":"Australian Dollar",
            "BGN": "Bulgarian Lev",
            "BRL": "Brazilian Real",
            "CAD": "Canadian Dollar",
            "CHF": "Swiss Franc",
            "CNY": "Chinese Yuan",
            "CZK": "Czech Koruna",
            "DKK": "Danish Krone",
            "EUR":"Euro",
            "GBP": "Pound Sterling",
            "HKD": "Hong Kong Dollar",
            "HRK": "Croatian Kuna",
            "HUF": "Hungarian Forint",
            "IDR": "Indonesian Rupiah",
            "ILS": "Israel Shekel",
            "INR": "Indian Rupee",
            "ISK": "Icelandic Króna",
            "JPY": "Japanese Yen",
            "KRW": "Korean Won",
            "MXN": "Mexican Peso",
            "MYR": "Malaysian Ringgit",
            "NOK": "Norwegian Krone",
            "NZD": "New Zeland Dollar",
            "PHP": "Philippine Peso",
            "PLN": "Polish Zloty",
            "RON": "Romanian Leu",
            "RUB": "Russian Ruble",
            "SEK": "Swedish Krona",
            "SGD": "Singapore Dollar",
            "THB": "Thai Baht",
            "TRY": "Turkish Lira",
            "USD": "American Dollar",
            "ZAR": "South African Rand"
        }
        return this.labelCoins;
    }
    //this function recieve a rate code and return a label code
    findLabel(code:string):string{
        let labelCoins = this.countriesJson();
        labelCoins = Object.entries(labelCoins);
        for(let i =0; i<=labelCoins.length - 1; i++){
            if(labelCoins[i][0] == code){
                return labelCoins[i][1];
            }
        }
        return '';
    }
    //this function recieves a label and returns a code
    findCode(label:string):string{
        let labelCoins = this.countriesJson();
        labelCoins = Object.entries(labelCoins);
        for(let i =0; i<=labelCoins.length - 1; i++){
            if(labelCoins[i][1] == label){
                return labelCoins[i][0];
            }
        }
        return '';
    }
}