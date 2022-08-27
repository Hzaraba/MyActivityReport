import { Time } from "@angular/common";

export interface ITicket {
  number: number;
  startTime: Time;
  endTime: Time;
  duration: number;
  comment: string;

  setStartTime(time: Time):void
}

export class TicketClass implements ITicket {
  constructor() { }
  
  setStartTime(time: Time): void {
    this.startTime = time;
  }

  startTime: Time;
  endTime: Time;
  number: number;
  duration: number;
  comment: string;

}
