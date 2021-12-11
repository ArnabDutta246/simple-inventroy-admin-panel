import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { Routes } from '@angular/router';


const router:Routes = [
  { 
    path:'',children:[
      {path:'/login',loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
      {path:'/brand',loadChildren: () => import('./brand/brand.module').then(m => m.BrandModule)},
      {path:'/product',loadChildren: () => import('./product/product.module').then(m => m.ProductModule)},     
    ]
  },
  {
    path:'',pathMatch:'full',redirectTo:'/product '
  }
]

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
