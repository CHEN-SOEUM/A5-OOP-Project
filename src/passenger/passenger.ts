import { Person, Gender } from "../person/person";

export class Passenger extends Person {
  private board_status: boolean;

  constructor(firstName: string, lastName: string, dateOfBirth: string, gender: Gender, boardStatus: boolean) {
    super(firstName, lastName, dateOfBirth, gender);
    this.board_status = boardStatus;
  }

  public getBoardStatus(): boolean {
    return this.board_status;
  }

  // Implement abstract methods
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