import { Ibuilder } from "./Ibuilder";
import { House } from "./house";

export class builder implements Ibuilder{
    house:House

constructor(){
    this.house = new House()
}
    setBuildingType(type:string):this{
       this.house.houseType= type;
       return this
    };
    setWallNumber(number:number):this{
        this.house.houseWallsNumber = number;
        return this
    };
    setWindowNumber(number:number):this{
        this.house.houseWindowNumber = number;
        return this
    };
    setDoorNumber(number:number):this{
        this.house.houseDoorNumber = number;
        return this
    };
    setRoomNumber(number:number):this{
        this.house.houseRoomNumber = number;
        return this
    };
    getResult():House{
        return this.house
    };
} 