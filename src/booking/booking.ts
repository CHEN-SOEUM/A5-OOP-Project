import { Ticket } from "../tickets/ticket";
export class Booking {
  private booking_references: string;
  private booking_date: Date;
  private tickets: Ticket[];
  constructor(booking_references: string, booking_date: Date) {
    this.booking_references = booking_references;
    this.booking_date = booking_date;
  }
  public getBookingReference(): string {
    return this.booking_references;
  }
  public getTickets(): Ticket[] {
    return this.tickets;
  }
}
