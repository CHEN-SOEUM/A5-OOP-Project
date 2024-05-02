import { Flight } from "../flight/flight";
export type flight={flightNumber:string,code:string}
export class Tag {
  private tag_id: string;
  private code:string
  private flight:Object
  constructor(tag_id: string, code:string) {
    this.tag_id = tag_id;
    this.code=code
  }
  public setFlight(flight:flight[]):void{
    this.flight=flight
  }
  public getCode(): string {
    return this.code;
  }
  public getTagId(): string {
    return this.tag_id;
  }
}
