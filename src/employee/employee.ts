import { Date } from "../date/date";
import { Gender } from "../gender/gender";
import { Person } from "../person/person";

export enum Position {
  mananger = "Manager",
  bagage = "Bagage",
  airport = "Airport Controller",
  pilot = "Pilot",
}
export class Employee extends Person {
  protected position: Position;
  protected salary: number;
  constructor(
    name: string,
    gender: Gender,
    date_of_birth: Date,
    position: Position,
    salary: number
  ) {
    super(name, gender, date_of_birth);
    this.position = position;
    this.salary = salary;
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
  public getPosition(): Position {
    return this.position;
  }
  public getSalary(): number {
    return this.salary;
  }
}
