import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
const routes:Routes = [
  { 
    path:'',component:CategoryComponent
  }
]


@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class CategoryModule { }
