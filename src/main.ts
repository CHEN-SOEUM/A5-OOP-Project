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
const passenger1: Passeger = new Passeger(
  "Ramsy",
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

//Flight Creation
const flight: Flight = new Flight("AKSW1", new dateTime("12", "05", "2022"));

//Gate Creation
const gate1: Gate = new Gate("1");

//Pilot Creation
const pilot1: Employee = new Employee(
  "Soching",
  "CHUN",
  Gender.male,
  new dateTime("10", "10", "2002"),
  Position.pilot,
  2100
);
//Seat creation
const seat1: Seat = new Seat(1, "A1", "First Class");
const seat2: Seat = new Seat(2, "A2", "Economy classic");

//AirPlane Creation
const plane1 = new Airplane(
  "LF-12",
  100,
  [seat1, seat2],
  [pilot1],
  new Gate("1")
);

//Booking creation
const booking1 = new Booking("DAJ", new dateTime("10", "10", "2022"));
booking1.addTickets(ticket1);
booking1.addTickets(ticket2);

//Airport Creation
const airport1: Airport = new Airport(
  "Porchen Tong",
  address,
  [new Gate("1")],
  []
);
//Set
airport1.setPlane(plane1);
ticket1.setFlight(flight);
seat1.setPassenger(passenger);
seat2.setPassenger(passenger1);
ticket1.setSeat(seat1);
ticket2.setSeat(seat2);
flight.assignAirplane(plane1);
flight.assignSeat(ticket2);
flight.assignSeat(ticket1);
// console.log(`This is passenger ${JSON.stringify(passenger)}`);
// console.log(`This is tickets ${JSON.stringify(ticket1)}`);
console.log(`This is flight ${JSON.stringify(ticket1.getSeat())}`);
// console.log(`This is airport ${JSON.stringify(airport1)}`);
