import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { HeaderModule } from 'src/app/shared-component/header/header.module';
import { FooterModule } from 'src/app/shared-component/footer/footer.module';
import { BreadcrumbModule } from 'src/app/shared-component/breadcrumb/breadcrumb.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    BreadcrumbModule,
    FormsModule,
    
  ]
})
export class ContactModule { }
