import { Ichair } from "./chair";
import { largeChair } from "./largChair";
import { mediumChair } from "./mediumChair";
import { smallChair } from "./smallChair";

export class chairFactory {
  static createObj(chairSize: string): Ichair | null {
    if (chairSize === "smallChair") {
      console.log("small chair created");
      return new smallChair(1, 1, 1);
    } 
    else if (chairSize === "mediumChair") {
      console.log("medium chair created");
      return new mediumChair(2, 2, 2);
    } 
    else if (chairSize === "largeChair") {
      console.log("medium chair created");
      return new largeChair(3, 3, 3);
    } 
    else {
      return null;
    }
  }
}
