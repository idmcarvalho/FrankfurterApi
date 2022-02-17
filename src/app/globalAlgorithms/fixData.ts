export class fixData{
    addZero(date:string){
        if(date.length==9){
            this.addStr(date,7,"0");
        }
    }
    addStr(str:string, index:number, stringToAdd:string){
        return str.substring(0, index) + stringToAdd + str.substring(index, str.length);
    }
}
