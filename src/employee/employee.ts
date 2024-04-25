import { Person, Gender } from "../person/person";

export enum Position {
  pilot = "Pilot",
  flightAttendant = "Flight Attendant",
  manager = "Manager",
  supervisor = "Supervisor",
  staff = "Staff",
}

export class Employee extends Person {
  private position: Position;
  private salary: number;

  constructor(firstName: string, lastName: string, dateOfBirth: string, gender: Gender, position: Position, salary: number) {
    super(firstName, lastName, dateOfBirth, gender);
    this.position = position;
    this.salary = salary;
  }

  public getSalary(): number {
    return this.salary;
  }

  public getPosition(): string {
    return this.position;
  }

  getFirstName(): string {
    return this.firstName;
  }

  getLastName(): string {
    return this.lastName;
  }

  getDateOfBirth(): string {
    return this.date_of_birth;
  }

  getGender(): string {
    return this.gender;
  }
}