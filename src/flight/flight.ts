import { Airplane } from "../airplane/airplane";
import { Ticket } from "../tickets/ticket";
export class Flight {
  private flight_number: number;
  private take_off_date: Date;
  private airplane: Airplane;
  private seat_number: number;
  private crew_schedule: boolean;
  constructor(flight_number: number, take_off_date: Date, seat_number: number) {
    this.flight_number = flight_number;
    this.take_off_date = take_off_date;
    this.seat_number = seat_number;
  }
  public setCrewSchedule(status: boolean): void {
    this.crew_schedule = status;
  }
  public getFlightNumber(): number {
    return this.flight_number;
  }
  public getTakeOffDate(): Date {
    return this.take_off_date;
  }
  public getCrewSchedule(): boolean {
    return this.crew_schedule;
  }
  public getAirplane(): Airplane {
    return this.airplane;
  }
}
