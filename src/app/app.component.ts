import { Component, OnInit } from '@angular/core';
import { ProductsService } from './shared/products/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  showLoader:boolean = false;
  title = 'admin-panel-howladar';
  constructor(private prodServ:ProductsService){
    this.loader();
  }
  ngOnInit(): void {
      this.loader();
  }
  // loader
  loader(){
   this.prodServ.getLoader().subscribe(res=>{
     console.log(res);
     //if(res !== this.showLoader){
     this.showLoader = res;
     //}
   })
  }
}
