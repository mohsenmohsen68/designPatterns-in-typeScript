import {  chair } from "./chair";

export class mediumChair extends chair{
    constructor(public width:number,public height:number,public length:number){
        super(width,height,length)
    }
    print():string{
        return `this chair has dimentions (${this.width},${this.height},${this.length}). `
    }

}