import { Ichair } from "./chair";
import { largeChair } from "./largChair";
import { mediumChair } from "./mediumChair";
import { smallChair } from "./smallChair";

export class chairFactory{
    static createChair(chairSize:string):number{
       if(chairSize === 'small'){
        console.log('small chair created');
        return new smallChair(2,4,4).getChairCapacity();
       }else if(chairSize === 'medium'){
        console.log('medium chair created');
        return new mediumChair(2,4,4).getChairCapacity();
    }else{
        console.log('large chair created');
        return new largeChair(2,4,4).getChairCapacity();
    }
    
}