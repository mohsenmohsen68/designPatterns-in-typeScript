import { chairType } from "./chairType";
export interface Ichair {
  width: number;
  height: number;
  length: number;
  getChairCapacity(): number;
}

export class chair implements Ichair {
  constructor(public width:number,public height:number,public length:number) {
  }

  getChairCapacity(): number {
    let capacity: number =this.height * this.length * this.width;
    return capacity;
  }
}
