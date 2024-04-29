export class Date{
    private day: string;
    private month: string;
    private year: string;
    constructor(day: string, month: string, year: string) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    public getDay(): string {
        return this.day;
    }
    public getMonth(): string {
        return this.month;
    }
    public getYear(): string {
        return this.year;
    }
}
