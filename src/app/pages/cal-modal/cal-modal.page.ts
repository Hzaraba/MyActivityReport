import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { TicketClass, ITicket, IEvent } from '../../models/ticket-class.model';

@Component({
  selector: 'app-cal-modal',
  templateUrl: './cal-modal.page.html',
  styleUrls: ['./cal-modal.page.scss'],
})
export class CalModalPage implements AfterViewInit {
  viewTitle: string;
  model: TicketClass = new TicketClass();
  event: IEvent;

  // event = {
  //   title: '',
  //   desc: '',
  //   startTime: null,
  //   endTime: '',
  //   allDay: true,
  // };

  modalReady = false;

  constructor(
    public formBuilder: FormBuilder,
    private modalCtrl: ModalController,
    private alertController: AlertController
  ) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.modalReady = true;
    }, 0);
  }
  getRemainingDays() {
    return 1;
  }

  onSubmitForm() {
    console.log(this.model);
    this.event = this.model.getEvent();

    this.save();
  }

  save() {
    this.modalCtrl.dismiss({ event: this.event });
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  onTimeSelected(ev) {
    // this.event.startTime = new Date(ev.selectedTime);
  }

  close() {
    this.modalCtrl.dismiss();
  }
}
