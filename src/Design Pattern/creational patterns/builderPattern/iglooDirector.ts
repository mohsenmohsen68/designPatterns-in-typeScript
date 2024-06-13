import { builder } from "./builder";
import { House } from "./house";

export class iglooDirector{
    static construct():House{
        return new builder()
        .setBuildingType('ice')
        .setDoorNumber(0)
        .setRoomNumber(0)
        .setWallNumber(1)
        .setWindowNumber(2)
        .getResult() 
    }
}