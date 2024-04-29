export enum SeatType {
  ecoclassic = "Economy Classic",
  ecoplus = "Economy Flex",
  business = "Business Class",
  first = "First Class",
}
export class Seat {
  private seat_number: string;
  private passenger: Passenger;
  private seat_type: SeatType;
  constructor(seat_number: string, seat_type: SeatType) {
    this.seat_number = seat_number;
    this.seat_type = seat_type;
  }
}
