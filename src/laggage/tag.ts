import { Address } from "../address/address";
import { Airplane } from "../airplane/airplane";
import { Ticket } from "../tickets/ticket";

export class Tag {
  private tagID: string;
  private plane: Airplane[];
  private stops: Address[];
  constructor(tagID: string) {
    this.tagID = tagID;
    this.plane = [];
    this.stops = [];
  }
  public addPlane(ticket: Ticket) {
    const flights = ticket.getFlight();
    for (let flight of flights) {
      this.plane.push(flight.getAirplane());
    }
    console.log("All plane has been assigned");
  }
  public addStop(ticket: Ticket) {
    const flights = ticket.getFlight();
    for (let flight of flights) {
      this.stops.push(flight.getDestination());
    }
  }
  public getPlane(): Airplane[] {
    return this.plane;
  }
  public getStops(): Address[] {
    return this.stops;
  }
}
