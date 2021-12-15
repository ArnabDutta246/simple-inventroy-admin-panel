import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
const routes:Routes = [
  { 
    path:'',component:BannerComponent
  }
]


@NgModule({
  declarations: [
    BannerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class BannerModule { }
