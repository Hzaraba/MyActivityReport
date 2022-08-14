import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CalModalPageRoutingModule } from './cal-modal-routing.module';
import { CalModalPage } from './cal-modal.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalModalPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CalModalPage]
})
export class CalModalPageModule {}
