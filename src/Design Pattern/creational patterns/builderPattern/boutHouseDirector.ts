import { builder } from "./builder";
import { House } from "./house";

export class boatHouseDirector {
    static construct():House{
      return new builder()
      .setBuildingType('wood')
      .setDoorNumber(1)
      .setRoomNumber(1)
      .setWallNumber(4)
      .setWindowNumber(7)
      .getResult()
    }
}