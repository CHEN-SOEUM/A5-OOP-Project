import { Flight } from "../flight/flight";

export class Tag {
  private tag_id: string;
  private code:string
  constructor(tag_id: string, code:string) {
    this.tag_id = tag_id;
    this.code=code
  }
  public getCode(): string {
    return this.code;
  }
  public getTagId(): string {
    return this.tag_id;
  }
}
