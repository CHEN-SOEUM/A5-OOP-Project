import { Date } from "../date/date";
import { Passenger } from "../passenger/passenger";
import { Ticket } from "../ticket/ticket";

export class Booking {
  private book_ref: string;
  private book_date: Date;
  private customer: Passenger;
  constructor(book_ref: string, book_date: Date) {
    this.book_ref = book_ref;
    this.book_date = book_date;
  }
  public setPassenger(passsenger: Passenger): void {
    this.customer = passsenger;
  }
  public getRef(): string {
    return this.book_ref;
  }
  public getPassenger(): Passenger {
    return this.customer;
  }
}
