import { Flight } from "../flight/flight";

export class Tag {
  private tag_id: string;
  private flights: Flight[];
  constructor(tag_id: string) {
    this.tag_id = tag_id;
    this.flights = [];
  }
  public addFlight(flight: Flight): void {
    this.flights.push(flight);
  }
  public getFlights(): Flight[] {
    return this.flights;
  }
  public getTagId(): string {
    return this.tag_id;
  }
}
