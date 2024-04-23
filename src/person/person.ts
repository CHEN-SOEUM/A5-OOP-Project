export enum Gender {
  male = "Male",
  female = "Female",
}
import { dateTime } from "../tickets/date";
export abstract class Person {
  protected firstName: string;
  protected lastName: string;
  protected date_of_birth: dateTime;
  protected gender: Gender;

  constructor(
    firstName: string,
    lastName: string,
    dateOfBirth: dateTime,
    gender: Gender
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.date_of_birth = dateOfBirth;
    this.gender = gender;
  }

  public getFirstName(): string {
    return this.firstName;
  }

  public getLastName(): string {
    return this.lastName;
  }

  public getDateOfBirth(): dateTime {
    return this.date_of_birth;
  }

  public getGender(): string {
    return this.gender;
  }
}
