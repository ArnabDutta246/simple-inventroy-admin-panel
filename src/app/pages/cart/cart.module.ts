import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderModule } from 'src/app/shared-component/header/header.module';
import { FooterModule } from 'src/app/shared-component/footer/footer.module';
import { BreadcrumbModule } from 'src/app/shared-component/breadcrumb/breadcrumb.module';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: CartComponent
  }
];

@NgModule({
  declarations: [
    CartComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    RouterModule.forChild(routes),
    BreadcrumbModule,
    FormsModule
  ]
})
export class CartModule { }
