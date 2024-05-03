import { Flight } from "../flight/flight";
import {Employee, Position} from "../employee/employee";
import {Gender} from "../gender/gender";
import {Date} from "../date/date";

export class FlightAttendant extends Employee{
    private join_flight: Flight[];
    constructor(name: string,gender: Gender,date_of_birth: Date, position: Position, salary: number) {
        super(name, gender, date_of_birth,position,salary);
        this.join_flight = [];
    }
    public setFlight(flight:Flight): void{
        this.join_flight.push(flight);
    }
    public getFlight():Flight[]{
        return this.join_flight;
    }
    public getPosition(): Position{
        return 
    }
    public getSalary(): number{
        return
    }
}