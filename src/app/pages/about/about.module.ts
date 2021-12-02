import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { HeaderModule } from 'src/app/shared-component/header/header.module';
import { BreadcrumbModule } from 'src/app/shared-component/breadcrumb/breadcrumb.module';
import { FooterModule } from 'src/app/shared-component/footer/footer.module';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModuleExport } from 'src/app/shared-component/carousel/carousel.module';

const routes:Routes = [
  {path:'',component:AboutComponent}
]

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    BreadcrumbModule,
    FooterModule,
    RouterModule.forChild(routes),
    CarouselModuleExport
  ],
})
export class AboutModule { }
