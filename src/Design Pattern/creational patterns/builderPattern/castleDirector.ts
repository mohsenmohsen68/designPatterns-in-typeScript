import { builder } from "./builder";
import { House } from "./house";

export class castleHouse{
    static construct():House{
        return new builder()
        .setBuildingType('stone')
        .setDoorNumber(20)
        .setRoomNumber(9)
        .setWallNumber(29)
        .setWindowNumber(47)
        .getResult()
    }
}