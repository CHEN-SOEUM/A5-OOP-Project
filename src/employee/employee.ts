import { Person } from "../person/person";
export enum Position {
  pilot = "Pilot",
  flightAttendant = "Fligt Attendant",
  manager = "Manager",
  supervisor = "Supervisor",
  staff = "Staff",
}
export class Employee extends Person {
  private position:Position;
  private salary:number;
  constructor(postion:Position,salary:number){
    super();
    this.position = postion;
    this.salary = salary;
  }
  public getSalary():number{
    return this.salary;
  }
  public getPosition():string{
    return this.position;
  }
} 
 