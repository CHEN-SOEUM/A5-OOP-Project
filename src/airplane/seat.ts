export class Seat{
    private seat_id: number;
    private seat_number: string;
    private seat_type: string;
    constructor(seat_id: number, seat_number: string, seat_type: string){
        this.seat_id = seat_id;
        this.seat_number = seat_number;
        this.seat_type = seat_type;
    }
    public getSeatId():number{
        return this.seat_id;
    }
    public getSeatNumber():string{
        return this.seat_number;
    }
    public getSeatType():string{
        return this.seat_type;
    }
}