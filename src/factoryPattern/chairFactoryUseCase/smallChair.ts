import {  chair } from "./chair";

export class smallChair extends chair{
    constructor(public width:number,public height:number,public length:number){
        super(width,height,length)
    }
print():void{}

}