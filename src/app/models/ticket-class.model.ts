import { Time } from "@angular/common";

export interface ITicket {
  number: number;
  allDay: boolean;
  startTime: Time;
  endTime: Time;
  duration: number;
  comment: string;
}

export interface IEvent {
  title: string,
  desc: string,
  startTime: Time,
  endTime: Time,
  allDay: boolean,
};


export class TicketClass implements ITicket {
  constructor() { }

  getEvent(): IEvent {
    return {
      title     : this.number.toString(),
      desc      : '',
      startTime : this.startTime,
      endTime   : this.endTime,
      allDay    : this.allDay,
    }
  }

  startTime: Time;
  endTime: Time;
  number: number;
  duration: number;
  comment: string;
  allDay: boolean;
}
