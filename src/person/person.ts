import { Date } from "../date/date";
import { Gender } from "../gender/gender";
export abstract class Person {
  protected name: string;
  protected gender: Gender;
  protected date_of_birth: Date;

  constructor(name: string, gender: Gender, date_of_birth: Date) {
    this.name = name;
    this.gender = gender;
    this.date_of_birth = date_of_birth;
  }

  abstract getName(): string;
  abstract getGender(): string;
  abstract getDateOfBirth(): Date;
}
