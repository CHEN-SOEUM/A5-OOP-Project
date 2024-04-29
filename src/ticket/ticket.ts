import { Flight } from "../flight/flight";

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
  private flight: Flight[];
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
  }
  public setPlane(flight: Flight[]): void {
    this.flight = flight;
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
