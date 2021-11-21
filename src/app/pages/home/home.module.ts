import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderModule } from 'src/app/shared-component/header/header.module';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModuleExport } from 'src/app/shared-component/carousel/carousel.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    RouterModule.forChild(routes),
    CarouselModuleExport,
  ]
})
export class HomeModule { }