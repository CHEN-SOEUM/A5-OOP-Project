import { Address } from "../address/address";
import { Airplane } from "../airplane/airplane";
import { Booking } from "../booking/booking";
import { Gate } from "./gate";
import {Employee} from "../employee/employee";
export class Airport {
  private name: string;
  private location: Address;
  private planes: Airplane[];
  private employees: Employee[];
  private gates: Gate[];
  private bookings: Booking[];
  constructor(name: string, location: Address) {
    this.name = name;
    this.location = location;
    this.planes = [];
    this.bookings = [];
    this.gates = [];
    this.employees = [];
  }
  public addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }
  public setPlanes(plane: Airplane): void {
    for(let planes of this.planes){
      if(planes.getregister_numbers() == plane.getregister_numbers()){
        console.log('this plane is already registered');
      }else{
        this.planes.push(plane)
        console.log('Plane added')
      }
    } 
    this.planes.push(plane);
  }
  public addBooking(booking: Booking): void {
    this.bookings.push(booking);
  }
  public setGates(gate: Gate): void {
    this.gates.push(gate);
  }
  public getBookingRef(ref: string): Booking {
    for (let book of this.bookings) {
      if (book.getRef() == ref) {
        return book;
      }
    }
  }
  public getPlanes(): Airplane[] {
    return this.planes;    
  }
  public getGates(): Gate[] {
    return this.gates;
  }
  public getTotalSalary():number{
    let sum = 0;
    for (let employee of this.employees) {
      sum+=employee.getSalary()
    }
    return sum;
  }
}
