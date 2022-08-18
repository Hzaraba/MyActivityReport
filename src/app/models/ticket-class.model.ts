export interface ITicket {
    number: number;
    duration: number;
    comment: string;
  }

export class TicketClass implements ITicket {
    constructor(){}

    number: number;
    duration: number;
    comment: string;

}
