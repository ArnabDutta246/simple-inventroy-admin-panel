import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandComponent } from './brand.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
const routes:Routes = [
  { 
    path:'',component:BrandComponent
  }
]


@NgModule({
  declarations: [
    BrandComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class BrandModule { }
