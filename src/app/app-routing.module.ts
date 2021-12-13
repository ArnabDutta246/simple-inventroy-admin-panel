import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'home',loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
  {path:'products',loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule)},
  {path:'cart',loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule)},
  {path:'about',loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)},
  {path:'contact',loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)},
  {path:'admin',loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule)},        
  {path:'',pathMatch:'full',redirectTo:'/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 