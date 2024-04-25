import { Ticket } from "../tickets/ticket";

export class Trip {
    private trip_id: string;
    private ticket: Ticket[];
    
    constructor(trip_id: string){
        this.trip_id = trip_id;
        this.ticket = [];  
    }
    public getTripId(): string {
        return this.trip_id;
    }
}
