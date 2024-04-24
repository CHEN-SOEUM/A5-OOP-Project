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
  public assignSeat(seatno: Seat, ticket: Ticket): void {
    for (let seat of this.airplane.getSeat()) {
      if (seatno.getSeatNumber() == seat.getSeatNumber()) {
        if (ticket.getSeat().getSeatNumber() == seatno.getSeatNumber()) {
          this.seat_number = seatno.getSeatNumber();
          console.log("Seat is being assigned");
        } else {
          console.log("Seat is not found");
        }
      } else {
        console.log("Seat doesn't exist");
      }
    }
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
