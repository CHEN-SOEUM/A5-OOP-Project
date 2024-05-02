import { Flight } from "../flight/flight";
import { Position } from "../employee/employee";

export class FlightAttendant {
    private join_flight: Flight[];
    constructor() {
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