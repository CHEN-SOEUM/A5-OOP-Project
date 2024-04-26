import { Gender, Person } from "../person/person";
import { dateTime } from "../tickets/date";
export class Passeger extends Person {
  private board_status: boolean = false;
  constructor(
    firstName: string,
    lastName: string,
    dateOfBirth: dateTime,
    gender: Gender
  ) {
    super(firstName, lastName, dateOfBirth, gender);
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
  public setBoardStatus(status: boolean): void {
    this.board_status = status;
    console.log("Passenger is on board");
  }
  public getBoardStatus(): boolean {
    return this.board_status;
  }
}
