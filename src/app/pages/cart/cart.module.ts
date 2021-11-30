import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderModule } from 'src/app/shared-component/header/header.module';
import { FooterModule } from 'src/app/shared-component/footer/footer.module';
import { BreadcrumbModule } from 'src/app/shared-component/breadcrumb/breadcrumb.module';


const routes: Routes = [
  {
    path: '',
    component: CartComponent
  }
];

@NgModule({
  declarations: [
    CartComponent,
    CartListComponent,
    PersonalDetailsComponent,
    OrderSummaryComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    RouterModule.forChild(routes),
    BreadcrumbModule
  ]
})
export class CartModule { }
