import { Address } from "../address/address";
import { Gate } from "../gate/gate";
import { Airplane } from "../airplane/airplane";
import { Booking } from "../booking/booking";
import { Ticket } from "../tickets/ticket";
export class Airport {
  private airport_name: string;
  private address: Address;
  private gates: Gate[] = [];
  private airplane: Airplane[] = [];
  private books: Booking[] = [];
  constructor(
    airport_name: string,
    addreess: Address,
    gates: Gate[],
    airplane: Airplane[]
  ) {
    this.airport_name = airport_name;
    this.address = addreess;
    this.gates = gates;
    this.airplane = airplane;
  }
  public getName(): string {
    return this.airport_name;
  }
  public getGates(): Gate[] {
    return this.gates;
  }
  public setGate(gate: Gate): void {
    this.gates.push(gate);
  }

  public setPlane(airplane: Airplane): void {
    this.airplane.push(airplane);
  }
  public addBooking(booking: Booking): void {
    this.books.push(booking);
  }
  public getTicketByBookref(ref: string): Booking {
    if (this.books.length > 0) {
      for (let book of this.books) {
        if (book.getBookingReference() == ref) {
          return book;
        }
      }
    } else {
      console.log("No book so far!!!");
    }
  }
  public getAirplance(): Airplane[] {
    return this.airplane;
  }
}
