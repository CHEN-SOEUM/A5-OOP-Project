import { Date } from "../date/date";
import { Passenger } from "../passenger/passenger";
import { Route } from "../route/route";

export class Flight {
  private flight_number: string;
  private route: Route;
  private take_off_date: Date;
  private passenger: Passenger[];
  constructor(flight_number: string) {
    this.flight_number = flight_number;
    this.passenger = [];
  }
  public setRoute(route: Route): void {
    this.route = route;
  }
  public setTakeOffDate(date: Date): void {
    this.take_off_date = date;
  }
  public addPassenger(passenger: Passenger): void {
    this.passenger.push(passenger);
  }
  public getFlightNumber(): string {
    return this.flight_number;
  }
  public getRoute():Route{
    return this.route;
  }
  public getReturnTicketPass(): Passenger[] {
    let passsengers: Passenger[] = [];
    for (let pass of this.passenger) {
      for (let ticket of pass.getTicket()) {
        if (ticket.getTicketType() == "Return") {
          passsengers.push(pass);
        }
      }
    }
    return passsengers;
  }
  public getTotalFood():number{
    let total:number=0
    for(let food of this.passenger) {
      for (let ticket of food.getTicket()){
        if (ticket.getTicketType() == "Normal") {
          total+=1
        }
      }
    }
    return total
  }
  public getPassenger(): Passenger[] {
    return this.passenger;
  }
  public getTakeOffDate(): Date {
    return this.take_off_date;
  }
  public checkPassenger(): void {
    let check: boolean = false;
    let i = 0;
    while (i<this.passenger.length && this.passenger[i].getBoardingStatus() ==true){
      check = true;
      i++
    }
    if(check){
      console.log('Plane is ready to take off');
    }else{
      console.log('Plane is not ready');   
    }
  }
}
