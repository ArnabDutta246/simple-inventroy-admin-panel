import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes = [
  { 
    path:'',component:AdminComponent,children:[
      {path:'ad-login',loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
      {path:'ad-brand',loadChildren: () => import('./brand/brand.module').then(m => m.BrandModule)},
      {path:'ad-product',loadChildren: () => import('./product/product.module').then(m => m.ProductModule)},
      {path:'ad-category',loadChildren: () => import('./category/category.module').then(m => m.CategoryModule)},
      {path:'',redirectTo:'/admin/ad-product',pathMatch:'full'}     
    ]
  },
  {
    path:'',pathMatch:'full',redirectTo:'/admin/ad-product '
  }
]

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
