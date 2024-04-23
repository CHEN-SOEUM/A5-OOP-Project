import { Gate } from "../gate/gate";
import { Employee } from "../employee/employee";
import { Seat } from "./seat";
export class Airplane {
  private register_number: string;
  private total_seat: number;
  private seat: Seat[];
  private crews: Employee[];
  private parking_gate: Gate;
  constructor(
    register_number: string,
    total_seat: number,
    seat: Seat[],
    crew: Employee[],
    parking_gate: Gate
  ) {
    this.register_number = register_number;
    this.total_seat = total_seat;
    this.seat = seat;
    this.crews = crew;
    this.parking_gate = parking_gate;
  }
  public getRegisterNumber(): string {
    return this.register_number;
  }
  public addCrew(Employee: Employee): void {
    this.crews.push(Employee);
  }

  public setGate(Gate: Gate): void {
    this.parking_gate = Gate;
  }

  public getCrew(): Employee[] {
    return this.crews;
  }
  public getSeat(): Seat[] {
    return this.seat;
  }
}
