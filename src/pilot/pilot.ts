import { Date } from "../date/date";
import { Employee, Position } from "../employee/employee";
import { Flight } from "../flight/flight";
import { Gender } from "../gender/gender";

export class Pilot extends Employee {
  private join_flights: Flight[];
  constructor(
    name: string,
    gender: Gender,
    date_of_birth: Date,
    position: Position,
    salary: number
  ) {
    super(name, gender, date_of_birth, position, salary);
    this.join_flights = [];
  }
  public setFlight(flight: Flight): void {
    this.join_flights.push(flight);
  }
  public getFlight(): Flight[] {
    return this.join_flights;
  }
  public getFlightByDate(date: Date): Flight[] {
    let flights: Flight[] = [];
    for (let flight of this.join_flights) {
      flights.push(flight);
    }
    return flights;
  }
  public getPosition(): Position {
    return this.position;
  }
  public getSalary(): number {
    return this.salary;
  }
}
