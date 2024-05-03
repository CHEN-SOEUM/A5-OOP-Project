export class Gate {
  private _number: string;
  constructor(_number: string) {
    this._number = _number;
  }
 public gateNumber(): string {
    return this._number;
  }
}
