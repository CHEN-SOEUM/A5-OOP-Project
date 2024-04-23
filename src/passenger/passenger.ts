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
  public setBoardStatus(status: boolean): void {
    this.board_status = status;
    console.log("Passenger is on board");
  }
  public getBoardStatus(): boolean {
    return this.board_status;
  }
}
