import { Ichair } from "./chairFactoryUseCase/chair";
import { chairFactory } from "./chairFactoryUseCase/chairFactoryClass";
import { tableFactory } from "./tableFactory.ts/tableFactory";
import { Itable } from "./tableFactory.ts/tableInterface";

export class abstractFactory{

   constructor(){}

   static createObj(objSize:string): Itable|Ichair|null{
      if(["smallChair", "mediumChair","largeChair"].includes(objSize)){
        return chairFactory.createObj(objSize)
      }
      else if(["smallTable", "mediumTable","largeTable"].includes(objSize)){
        return tableFactory.createObj(objSize)
      }
      else{
        return null;
      }
   }
}