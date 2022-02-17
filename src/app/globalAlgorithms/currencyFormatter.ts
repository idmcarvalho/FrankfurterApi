export class currencyFormatter {
    //This function recieves a currency code and a currency value and returns the value formatted 
    currencyFormatterByCode(code:string,value:number) {
        // Create our number formatter.
        var formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: code,
        });
        return formatter.format(value);
    }
}