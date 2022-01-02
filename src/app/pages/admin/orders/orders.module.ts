import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OrdersDetailsModule } from './orders-details/orders-details.module';

const routes: Routes = [
  {
    path: '',
    component: OrdersComponent,
  },
];

@NgModule({
  declarations: [OrdersComponent],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    OrdersDetailsModule,
  ],
})
export class OrdersModule {}
