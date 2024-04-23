//Import classes from files.
import { dateTime } from "./date";
import { Passeger } from "../passenger/passenger";
import { Flight } from "../flight/flight";
import { Seat } from "../airplane/seat";
export enum TicketType {
  ecoClassic = "Economy classic",
  ecoFlex = "Economy flex",
  business = "Business",
  firstClass = "First Class",
}
export enum SpecialMeal {
  babyMeal = "Baby Meal",
  toddlerMeal = "Toddler Meal",
  veganMeal = "Vegan Meal",
}
export class Ticket {
  private ticket_number: string;
  private departure_date: dateTime;
  private passenger: Passeger;
  private flight: Flight[] = [];
  private payment_status: boolean;
  private seat: Seat;
  private ticket_type: TicketType;
  private special_meal: SpecialMeal;
  constructor(
    ticket_number: string,
    departure_date: dateTime,
    passenger: Passeger,
    ticket_type: TicketType,
    special_meal: SpecialMeal
  ) {
    this.ticket_number = ticket_number;
    this.departure_date = departure_date;
    this.passenger = passenger;
    this.ticket_type = ticket_type;
    this.special_meal = special_meal;
  }
  public setPaymentStatus(status: boolean): void {
    if (status == this.payment_status) {
      console.log("This ticket has already been paid");
    } else {
      this.payment_status = status;
      console.log("This ticket has been paid");
    }
  }
  public setFlight(flight: Flight): void {
    this.flight.push(flight);
    console.log("Flight added to ticket");
  }
  public setSeat(seat: Seat): void {
    this.seat = seat;
  }
  public getSeat(): Seat {
    return this.seat;
  }
  public getTicketNumber(): string {
    return this.ticket_number;
  }
  public getDepartureDate(): dateTime {
    return this.departure_date;
  }
  public getPaymentStatus(): boolean {
    return this.payment_status;
  }
}
