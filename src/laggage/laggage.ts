import { Tag } from "./tag";

export class Laggage {
  private color: string;
  private tag: Tag;
  constructor(color: string) {
    this.color = color;
  }
  public addTag(tag:Tag):void{
    this.tag=tag
  }
  public getColor(): string {
    return this.color;
  }
}
