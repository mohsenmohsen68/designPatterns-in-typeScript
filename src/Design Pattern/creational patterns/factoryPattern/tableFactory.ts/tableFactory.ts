import { largeTable } from "./largeTable";
import { mediumTable } from "./mediumTable";
import { smallTable } from "./smallTable";
import { Itable } from "./tableInterface";


export class tableFactory {
   static createObj(tableType:string):Itable | null{
    switch(tableType){
        case "smallTable":{
            console.log("small table created");
            return new smallTable(2,2,2,2);
        }
        case "mediumTable":{
            console.log("medium table created");
            return new mediumTable(4,4,4,4);
        }
        case "largeTable":{
            console.log("large table created");
            return new largeTable(7,7,7,7);
        }
        default:{
            return null;
        }
    }
   }
}