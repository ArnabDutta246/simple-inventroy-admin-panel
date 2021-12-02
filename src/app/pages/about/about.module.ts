import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { HeaderModule } from 'src/app/shared-component/header/header.module';
import { BreadcrumbModule } from 'src/app/shared-component/breadcrumb/breadcrumb.module';
import { FooterModule } from 'src/app/shared-component/footer/footer.module';



@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    BreadcrumbModule,
    FooterModule
  ],
  exports:[
    AboutComponent
  ]
})
export class AboutModule { }
