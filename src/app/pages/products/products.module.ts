import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { FooterModule } from 'src/app/shared-component/footer/footer.module';
import { HeaderModule } from 'src/app/shared-component/header/header.module';
import { CarouselModuleExport } from 'src/app/shared-component/carousel/carousel.module';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbModule } from 'src/app/shared-component/breadcrumb/breadcrumb.module';
import { SingleProductModule } from 'src/app/shared-component/product/product.module';
const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  }
];


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    CarouselModuleExport,
    HeaderModule,
    FooterModule,
    BreadcrumbModule,
    SingleProductModule
  ]
})
export class ProductsModule { }
