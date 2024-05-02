import { Date } from "../date/date";
import { Gender } from "../gender/gender";
import { Laggage } from "../laggage/laggage";
import { Person } from "../person/person";
import { Ticket } from "../ticket/ticket";

export class Passenger extends Person {
  private ticket: Ticket[];
  private bag?: Laggage;
  private boardStatus: boolean;
  constructor(name: string, gender: Gender, date_of_birth: Date) {
    super(name, gender, date_of_birth);
    this.ticket = [];
    this.boardStatus = false;
  }
  public setTicket(tickets: Ticket[]): void {
    this.ticket = tickets;
  }

  public addTicket(ticket: Ticket): void {
    this.ticket.push(ticket);
  }

  public getTicket(): Ticket[] {
    return this.ticket;
  }

  public getBoardingStatus(): boolean {
    return this.boardStatus;
  }

  public getTag(): Laggage {
    return this.bag;
  }
  public addBag(bag:Laggage):void{
    this.bag=bag
  }
  public getName(): string {
    return this.name;
  }
  public getGender(): string {
    return this.gender;
  }
  public getDateOfBirth(): Date {
    return this.date_of_birth;
  }
  public setBoardStatus(status: boolean): void {
    this.boardStatus = status
  }
}
