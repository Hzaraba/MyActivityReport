import { Time } from "@angular/common";

export interface ITicket {
  number: number;
  startTime: Time;
  endTime: Time;
  duration: number;
  comment: string;
}

export class TicketClass implements ITicket {
  constructor() { }
  startTime: Time;
  endTime: Time;
  number: number;
  duration: number;
  comment: string;

}
