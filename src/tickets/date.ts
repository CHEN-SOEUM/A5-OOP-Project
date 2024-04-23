export class Date {
  private _day: number;
  private _month: number;
  private _year: number;
  constructor(day: number, month: number, year: number) {
    this._day = day;
    this._month = month;
    this._year = year;
  }
  public get_day(): number {
    return this._day;
  }
  public get_month(): number {
    return this._month;
  }
  public get_year(): number {
    return this._year;
  }
}
