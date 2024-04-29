class Ticket {

}

class Luggage {

}

class Passenger {
    private ticket: Ticket[];
    private bag?: Luggage;
    private boardStatus: boolean;

    public setTicket(tickets: Ticket[]): void {
        this.ticket = tickets;
    }

    public addTicket(ticket: Ticket[]): void {
        this.ticket.push(...ticket);
    }

    public getTicket(): Ticket[] {
        return this.ticket;
    }

    public getBoardingStatus(): boolean {
        return this.boardStatus;
    }

    public getTag(): Tag {
        return new Tag();
    }
}

class Tag {

}

// const passenger = new Passenger();
// const ticket1 = new Ticket();
// const ticket2 = new Ticket();
// passenger.setTicket([ticket1]);
// passenger.addTicket([ticket2]);
// const tickets = passenger.getTicket();
// console.log(tickets);