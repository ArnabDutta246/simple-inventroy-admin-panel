import { Component } from '@angular/core';
import { ProductsService } from './shared/products/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showLoader:boolean = false;
  title = 'admin-panel-howladar';
  constructor(private prodServ:ProductsService){}
  // loader
  loader(){
   this.prodServ.getLoader().subscribe(res=>{
     this.showLoader = res;
   })
  }
}
