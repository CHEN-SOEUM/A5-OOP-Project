export class dateTime {
  private _day: string;
  private _month: string;
  private _year: string;
  constructor(day: string, month: string, year: string) {
    this._day = day;
    this._month = month;
    this._year = year;
  }
  public get_day(): string {
    return this._day;
  }
  public get_month(): string {
    return this._month;
  }
  public get_year(): string {
    return this._year;
  }
}
