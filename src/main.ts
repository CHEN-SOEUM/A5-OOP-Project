import { Address } from "./address/address";
import { Airplane } from "./airplane/airplane";
import { Seat } from "./airplane/seat";
import { Airport } from "./airport/airport";
import { Booking } from "./booking/booking";
import { Employee, Position } from "./employee/employee";
import { Gate } from "./gate/gate";
import { Flight } from "./flight/flight";
import { Passeger } from "./passenger/passenger";
import { Ticket, TicketType, SpecialMeal } from "./tickets/ticket";
import { Gender } from "./person/person";
import { dateTime } from "./tickets/date";

//Address Creation
const address: Address = new Address("Phnom Penh", "Cambodia");
//Create Passenger
const passenger: Passeger = new Passeger(
  "Jessy",
  "Lorences",
  new dateTime("12", "05", "2022"),
  Gender.female
);
//Ticket Creation
const ticket1: Ticket = new Ticket(
  "ADK123",
  new dateTime("10", "10", "2022"),
  passenger,
  TicketType.ecoClassic,
  SpecialMeal.veganMeal
);
const ticket2: Ticket = new Ticket(
  "ADK153",
  new dateTime("10", "10", "2022"),
  passenger,
  TicketType.ecoClassic,
  SpecialMeal.veganMeal
);
const flight: Flight = new Flight("AKSW1", new dateTime("12", "05", "2022"));
//Pilot Creation
const pilot1: Employee = new Employee(
  "Soching",
  "CHUN",
  Gender.male,
  new dateTime("10", "10", "2002"),
  Position.pilot,
  2100
);
//AirPlane Creation
const plane1 = new Airplane(
  "LF-12",
  100,
  [new Seat(1, "A1", "First Class"), new Seat(2, "A2", "Economy classic")],
  [pilot1],
  new Gate("1")
);
//Booking creation
const booking1 = new Booking("DAJ", new dateTime("10", "10", "2022"));
booking1.addTickets(ticket1);
//Airport Creation
const airport1: Airport = new Airport(
  "Porchen Tong",
  address,
  [new Gate("1")],
  []
);
airport1.setPlane(plane1);
airport1.addBooking(booking1);
ticket1.setFlight(flight);
ticket1.setSeat(new Seat(1, "A1", "First Class"));
ticket2.setSeat(new Seat(2, "A2", "Economy classic"));
flight.assignAirplane(plane1);
flight.assignSeat(ticket1);
flight.assignSeat(ticket2);
airport1.setPlane(plane1)
// console.log(`This is passenger ${JSON.stringify(passenger)}`);
// console.log(`This is tickets ${JSON.stringify(ticket1)}`);
// console.log(`This is airport ${JSON.stringify(airport1)}`);
// console.log(`This is flight ${JSON.stringify(flight)}`);
// console.log(`This is airport ${JSON.stringify(airport1)}`

