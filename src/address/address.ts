export class Address {
    private city: string;
    private country: string;
    constructor(city: string, country: string){
        this.city = city;
        this.country = country;
    }
    public getcity(): string {
        return this.city;
    }
    public getcountry(): string {
        return this.country;
    }
}