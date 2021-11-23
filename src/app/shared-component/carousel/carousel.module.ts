import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SingleProductModule } from '../product/product.module';


@NgModule({
  declarations: [
    CarouselComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    SingleProductModule
  ],
  exports:[CarouselComponent]
})
export class CarouselModuleExport { }
