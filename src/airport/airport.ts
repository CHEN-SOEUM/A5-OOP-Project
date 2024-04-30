import { Address } from "../address/address";
import { Airplane } from "../airplane/airplane";
import { Booking } from "../booking/booking";
import { Gate } from "./gate";
export class Airport {
  private name: string;
  private location: Address;
  private planes: Airplane[];
  private gates: Gate[];
  private bookings: Booking[];
  constructor(name: string, location: Address) {
    this.name = name;
    this.location = location;
    this.planes = [];
    this.bookings = [];
    this.gates = [];
  }
  public setPlanes(plane: Airplane): void {
    for(let planes of this.planes){
      if(planes.getregister_numbers() == plane.getregister_numbers()){
        console.log('this plane is already registered');
      }else{
        console.log('you can register this plane'); 
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
}
