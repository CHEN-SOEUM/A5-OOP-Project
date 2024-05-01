export class Gate {
  private _number: string;
  constructor(_number: string) {
    this._number = _number;
  }
  get number(): string {
    return this._number;
  }
}
