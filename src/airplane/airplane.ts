import { Seat } from "../seat/seat";
import {Gate} from "../airport/gate";

export class Airplane {
  private register_numbers: string;
  private _parking_gate:Gate
  private seats: Seat[];
  constructor(register_numbers: string) {
    this.register_numbers = register_numbers;
  }
  public setSeat(seat: Seat[]) {
    this.seats = seat;
  }
  public setGate(gate: Gate) {
    this._parking_gate=gate
  }
  public getGates(): Gate{
    return this._parking_gate;
  }
  public getSeat(): Seat[] {
    return this.seats;
  }
}
