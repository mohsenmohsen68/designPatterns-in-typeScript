import { Itable } from "./tableInterface";

export class table implements Itable{
    constructor(public width:number, public height:number,public length:number,public capacity:number){}

    print(){
        return `this table has dimentions (${this.width},${this.height},${this.length}) and its capacity is ${this.capacity} `
    }

}