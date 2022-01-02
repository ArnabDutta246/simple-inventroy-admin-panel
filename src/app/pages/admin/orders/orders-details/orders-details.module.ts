import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersDetailsComponent } from './orders-details.component';

@NgModule({
  declarations: [OrdersDetailsComponent],
  imports: [CommonModule],
  exports: [OrdersDetailsComponent],
})
export class OrdersDetailsModule {}
