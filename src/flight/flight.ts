import { Date } from "../date/date";
import { Passenger } from "../passenger/passenger";
import { Route } from "../route/route";

export class Flight {
  private flight_number: string;
  private route: Route;
  private take_off_date: Date;
  private passenger: Passenger[];
  constructor(flight_number: string) {
    this.flight_number = flight_number;
    this.passenger = [];
  }
  public setRoute(route: Route): void {
    this.route = route;
  }
  public setTakeOffDate(date: Date): void {
    this.take_off_date = date;
  }
  public addPassenger(passenger: Passenger): void {
    this.passenger.push(passenger);
  }
  public getFlightNumber(): string {
    return this.flight_number;
  }
  public getReturnTicketPass(): Passenger[] {
    let passsengers: Passenger[] = [];
    for (let pass of this.passenger) {
      for (let ticket of pass.getTicket()) {
        if (ticket.getTicketType() == "Return") {
          passsengers.push(pass);
        }
      }
    }
    return passsengers;
  }
  public getPassenger(): Passenger[] {
    return this.passenger;
  }
  public getTakeOffDate(): Date {
    return this.take_off_date;
  }
}
