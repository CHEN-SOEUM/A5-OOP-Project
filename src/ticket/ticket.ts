import { Flight } from "../flight/flight";
import {Address} from "../address/address";
import {BoardingPass} from "../boarding-pass/boarding_pass";


export enum TicketType {
  normal = "Normal",
  return = "Return",
}
export enum TicketClass {
  ecoclssic = "Economy Class",
  business = "Business Class",
  first = "First Class",
}

export enum Meal {
  normal = "Normal Meal",
  vegan = "Vegan Meal",
  baby = "Baby Meal",
}
export class Ticket {
  private ticket_id: string;
  private ticket_type: TicketType;
  private ticket_class: TicketClass;
  private meal: Meal;
  private from:Address
  private to:Address
  private flight: Flight[];
  private boarding_pass:BoardingPass[]
  private ticket_price: number;
  constructor(
    ticket_id: string,
    ticket_type: TicketType,
    ticket_class: TicketClass,
    price: number,
    meal: Meal
  ) {
    this.ticket_id = ticket_id;
    this.ticket_type = ticket_type;
    this.ticket_class = ticket_class;
    this.ticket_price = price;
    this.meal = meal;
    this.boarding_pass=[]
  }
  public setPlane(flight: Flight[]): void {
    this.flight = flight;
  }
  public setFrom(address: Address): void {
    this.from = address;
  }
  public setTo(address: Address): void {
    this.to = address;
  }
  public generatePass():void{
    for (let flight of this.flight) {
      this.boarding_pass.push(new BoardingPass("SK1",flight.getRoute().getPlane(),"CAM"))
    }
  }
  public getBoardingPass():BoardingPass[]{
    return this.boarding_pass;
  }
  public getFlight(): Flight[] {
    return this.flight;
  }
  public getTicketType(): TicketType {
    return this.ticket_type;
  }
  public getTicketClass(): TicketClass {
    return this.ticket_class;
  }
  public getMeal(): Meal {
    return this.meal;
  }
  public getTicketPrice(): number {
    return this.ticket_price;
  }
  public getTicketId(): string {
    return this.ticket_id;
  }
}
