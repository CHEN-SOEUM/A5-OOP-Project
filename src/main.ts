import { Address } from "./address/address";
import { Airplane } from "./airplane/airplane";
import { Airport } from "./airport/airport";
import { Flight } from "./flight/flight";
import { Meal, Ticket, TicketClass, TicketType } from "./ticket/ticket";
import { Trip } from "./trip/trip";
import { Seat } from "./seat/seat";
import { Route } from "./route/route";
import { Gender } from "./gender/gender";
import { Booking } from "./booking/booking";
import { Date } from "./date/date";
import { Employee, Position } from "./employee/employee";
import { Passenger } from "./passenger/passenger";
import { Pilot } from "./pilot/pilot";
import {BoardingPass} from "./boarding-pass/boarding_pass";
import {Gate} from "./airport/gate";

//Initialize test

//Create Address
const address1 = new Address("Phnom Penh", "Cambodia");
const address2 = new Address("Siem Reap", "Cambodia");
//Create Airport
const airport1 = new Airport("Phnom Penh", address1);
const airport2 = new Airport("Siem Reap", address1);
//Create Airplane
const airplane1 = new Airplane("Airbus A380");
const airplane2 = new Airplane("Boeing 747");
airplane1.setGate(new Gate("SAK"));
airplane2.setGate(new Gate("SASS"));
//Create Routes
const route1 = new Route("JSK12");
const route2 = new Route("JSK15");
route1.setPlane(airplane1)
route2.setPlane(airplane2)

//Create Flight
const flight1 = new Flight("JSK");
const flight2 = new Flight("SRC");
flight1.setTakeOffDate(new Date("29", "04", "2024"));
flight2.setTakeOffDate(new Date("29", "04", "2024"));
flight1.setRoute(route1)
flight2.setRoute(route2)
//Create Trip
const trip1 = new Trip("Day off");
const trip2 = new Trip("Vacation");
//Create Boarding Pass
const boarding_pass1=new BoardingPass("JSiK",airplane1,"CAM")
const boarding_pass2=new BoardingPass("JSiK",airplane1,"TH")
const boarding_pass3=new BoardingPass("JSiK",airplane1,"JAP")
//Create Ticket
const ticket1 = new Ticket(
  "123456789",
  TicketType.normal,
  TicketClass.business,
  150,
  Meal.normal
);
const ticket2 = new Ticket(
  "123456789",
  TicketType.return,
  TicketClass.business,
  150,
  Meal.normal
);
ticket1.setFrom(address1)
ticket1.setPlane([flight1,flight2])
ticket2.setFrom(address1)
//Create Passenger
const passenger1 = new Passenger(
  "James Moris",
  Gender.Male,
  new Date("12", "05", "1999")
);
passenger1.addTicket(ticket1);
passenger1.addTicket(ticket2);

//Create Pilot
const pilot1 = new Pilot(
  "Jame",
  Gender.Male,
  new Date("12", "05", "1992"),
  Position.pilot,
  1200
);
pilot1.setFlight(flight1);
pilot1.setFlight(flight2);
//Create Booking
const booking1 = new Booking("JSK123", new Date("12", "05", "1999"));
booking1.setPassenger(passenger1);
airport1.addBooking(booking1);
airport1.setPlanes(airplane1)
flight1.addPassenger(passenger1);
airport1.setPlanes(airplane2)
flight1.checkPassenger();

//User story 1
// console.log(
//   `This is getting booking by ref ${JSON.stringify(
//     airport1.getBookingRef("JSK123")
//   )}`
// );
// User Story 2
// console.log(
//   `These are passenger with return ticket ${JSON.stringify(
//     flight1.getReturnTicketPass()
//   )}`
// );
//User Story 3
// console.log(pilot1.getFlightByDate(new Date("29", "04", "2024")));
//User Story 4
// console.log(flight1.getTotalFood())
//User Story 5
// console.log(airport1.getTotalSalary())
//User Story 6
// console.log(boarding_pass1.getPlane().getGates())
//User Story 7
// ticket1.generatePass()
// console.log(ticket1.getBoardingPass())

