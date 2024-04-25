import { Tag } from "./tag";

export class Laggage {
  private color: string;
  private type: string;
  private tag: Tag;
  constructor(color: string, type: string) {
    this.color = color;
    this.type = type;
  }
  public setTag(tag: Tag) {
    this.tag = tag;
  }
  public getColor(): string {
    return this.color;
  }
  public getType(): string {
    return this.type;
  }
  public getTag(): Tag {
    return this.tag;
  }
}
