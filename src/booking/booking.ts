import { dateTime } from "../tickets/date";
import { Ticket } from "../tickets/ticket";
export class Booking {
  private booking_references: string;
  private booking_date: dateTime;
  private tickets: Ticket[] = [];
  constructor(booking_references: string, booking_date: dateTime) {
    this.booking_references = booking_references;
    this.booking_date = booking_date;
  }
  public getBookingReference(): string {
    return this.booking_references;
  }
  public addTickets(ticket: Ticket): void {
    this.tickets.push(ticket);
    console.log("Ticket added");
  }
  public getTickets(): Ticket[] {
    return this.tickets;
  }
}
