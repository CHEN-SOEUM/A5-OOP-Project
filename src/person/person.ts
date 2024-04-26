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

  abstract getFirstName(): string;

  abstract getLastName(): string;

  abstract getDateOfBirth(): dateTime;

  abstract getGender(): string;
}
