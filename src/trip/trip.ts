import { Flight } from "../flight/flight";

export class Trip {
  private trip_name: string;
  private flight: Flight[];
  constructor(trip_name: string) {
    this.trip_name = trip_name;
    this.flight = [];
  }
  public addFlight(flight: Flight): void {
    this.flight.push(flight);
  }
  public getTripName(): string {
    return this.trip_name;
  }
  public getFlights(): Flight[] {
    return this.flight;
  }
}
