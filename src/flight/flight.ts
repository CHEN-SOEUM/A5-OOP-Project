import { Airplane } from "../airplane/airplane";
import { Seat } from "../airplane/seat";
import { dateTime } from "../tickets/date";
import { Ticket } from "../tickets/ticket";
export class Flight {
  private flight_number: string;
  private take_off_date: dateTime;
  private airplane: Airplane;
  private seat_number: string;
  private crew_schedule: boolean;
  constructor(flight_number: string, take_off_date: dateTime) {
    this.flight_number = flight_number;
    this.take_off_date = take_off_date;
  }
  public assignSeat(ticket: Ticket): void {
    let seat_number = ticket.getSeat().getSeatNumber();
    let index = 0;
    const seats = this.airplane.getSeat();
    for (let i = 0; i < seats.length; i++) {
      if (ticket.getTicketType() === seats[i].getSeatType()) {
        if (seat_number == seats[i].getSeatNumber()) {
          index = i;
          console.log("Assigned");
        } else {
          console.log("Not assigned");
        }
      }
    }
    this.seat_number = seats[index].getSeatNumber();
  }
  public assignAirplane(airplane: Airplane) {
    this.airplane = airplane;
  }
  public getSeat(): string {
    return this.seat_number;
  }
  public setCrewSchedule(status: boolean): void {
    this.crew_schedule = status;
  }
  public getFlightNumber(): string {
    return this.flight_number;
  }
  public getTakeOffDate(): dateTime {
    return this.take_off_date;
  }
  public getCrewSchedule(): boolean {
    return this.crew_schedule;
  }
  public getAirplane(): Airplane {
    return this.airplane;
  }
}
