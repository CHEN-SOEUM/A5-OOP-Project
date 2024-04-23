import { Person } from "../person/person";

export class Passeger extends Person {
  private board_status: boolean;

  constructor(boardStatus: boolean) {
  super()
  this.board_status=boardStatus;
}
  public getBoardStatus(): boolean {
    return this.board_status;
  }
}