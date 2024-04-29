import { Seat } from "../seat/seat";

export class Airplane {
  private register_numbers: string;
  private seats: Seat[];
  constructor(register_numbers: string) {
    this.register_numbers = register_numbers;
  }
  public setSeat(seat: Seat[]) {
    this.seats = seat;
  }
  public getSeat(): Seat[] {
    return this.seats;
  }
}
