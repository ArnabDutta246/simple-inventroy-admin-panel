import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


const routes:Routes = [
  { 
    path:'',component:ProductComponent
  }
]

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductModule { }
