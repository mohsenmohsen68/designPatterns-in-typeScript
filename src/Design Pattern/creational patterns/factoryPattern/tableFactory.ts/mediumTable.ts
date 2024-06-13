import { table } from "./table";

export class mediumTable extends table {
  constructor(
    public width: number,
    public height: number,
    public length: number,
    public capacity: number
  ) {
    super(width, height, length, capacity);
  }
  
}