import * as XLSX from 'xlsx';

export class findCountries {
    labelCoins: any;
    countriesJson() {
        this.labelCoins = {
            "AUD":"Australian Dollar",
            "BGN": "Bulgarian Lev",
            "BRL": "Real",
            "CAD": "Canadian Dollar",
            "CHF": "Swiss Franc",
            "CNY": "Chinese Yuan",
            "CZK": "Czech Koruna",
            "DKK": "Danish Krone",
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
    findLabel(code:string){
        let labelCoins = this.countriesJson();
        labelCoins = Object.entries(labelCoins);
        for(let i =0; i<=labelCoins.length - 1; i++){
            if(labelCoins[i][0] == code){
                return labelCoins[i][1];
            }
        }
    }
    exportToExcel(fileName:string) {
        // table id is passed over here
        let element = document.getElementById('excel-table');
        const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
        // generate workbook and add the worksheet
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        // save to file
        XLSX.writeFile(wb, `${fileName}.xlsx`);
      }
    
}