import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    CarouselComponent
  ],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports:[CarouselComponent]
})
export class CarouselModuleExport { }
