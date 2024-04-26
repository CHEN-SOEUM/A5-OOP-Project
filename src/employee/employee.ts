import { Gender, Person } from "../person/person";
import { dateTime } from "../tickets/date";
export enum Position {
  pilot = "Pilot",
  flightAttendant = "Fligt Attendant",
  manager = "Manager",
  supervisor = "Supervisor",
  staff = "Staff",
}
export class Employee extends Person {
  private position: Position;
  private salary: number;
  constructor(
    firstName: string,
    lastName: string,
    gender: Gender,
    dateOfBirth: dateTime,
    postion: Position,
    salary: number
  ) {
    super(firstName, lastName, dateOfBirth, gender);
    this.position = postion;
    this.salary = salary;
  }
  public getFirstName(): string {
    return this.firstName;
  }
  public getLastName(): string {
    return this.lastName;
  }
  public getGender(): string {
    return this.gender;
  }
  public getDateOfBirth(): dateTime {
    return this.date_of_birth;
  }
  public getSalary(): number {
    return this.salary;
  }
  public getPosition(): string {
    return this.position;
  }
}
