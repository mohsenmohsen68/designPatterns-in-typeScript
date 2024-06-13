import { chairFactory } from "./factoryPattern/chairFactoryUseCase/chairFactoryClass";

const size = chairFactory.createChair("large")
console.log("chair size is : ",size)