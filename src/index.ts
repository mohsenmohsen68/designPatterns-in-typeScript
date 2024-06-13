import { boatHouseDirector } from "./Design Pattern/creational patterns/builderPattern/boutHouseDirector";
import { castleHouse } from "./Design Pattern/creational patterns/builderPattern/castleDirector";
import { iglooDirector } from "./Design Pattern/creational patterns/builderPattern/iglooDirector";
import { abstractFactory } from "./Design Pattern/creational patterns/factoryPattern/abstractFactory";
import { tableFactory } from "./Design Pattern/creational patterns/factoryPattern/tableFactory.ts/tableFactory";


// const obj = abstractFactory.createObj("largeTable")
// console.log('the obj is : ', obj);

// const oo = tableFactory.createObj("smallTable")
// console.log(oo?.print())

const largeHouse = castleHouse.construct()
console.log('castle :', largeHouse)
const boatHouse = boatHouseDirector.construct()
console.log("boat house",boatHouse)
const iglooHouse = iglooDirector.construct()
console.log(" igloo house: ",iglooHouse)