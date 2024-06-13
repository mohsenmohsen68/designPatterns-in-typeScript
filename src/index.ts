import { abstractFactory } from "./factoryPattern/abstractFactory";
import { tableFactory } from "./factoryPattern/tableFactory.ts/tableFactory";


const obj = abstractFactory.createObj("largeTable")
console.log('the obj is : ', oo);

// const oo = tableFactory.createObj("smallTable")
// console.log(oo?.print())

