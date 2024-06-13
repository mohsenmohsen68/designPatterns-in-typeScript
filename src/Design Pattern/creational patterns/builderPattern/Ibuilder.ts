import { House } from "./house";

export interface Ibuilder{
    house:House;
    setBuildingType(type:string):this;
    setWallNumber(number:number):this;
    setWindowNumber(number:number):this;
    setDoorNumber(number:number):this;
    setRoomNumber(number:number):this;
    getResult():House;
}