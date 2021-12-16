import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/data/data.service';
import { ProductsService } from 'src/app/shared/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  extraData:any;
  products: any[] = [];
  selectedProd: any = null;
  constructor(private db:DataService,private router:Router,private productServ:ProductsService) { }

  ngOnInit(): void {
    this.getAllProducts();
    this.getExtraData()
  }
  // get extra data
  getExtraData(){
    this.productServ.loaderUpdate(true);
    this.productServ.getExtras().then(res=>{
      let data:any = res.data(); 
      this.extraData = data;
      console.log("extras data",data.categories);
      this.productServ.loaderUpdate(false);
    }).catch(err=>{
      this.productServ.loaderUpdate(false);
    })
  }

  // get products
  getAllProducts() {
    this.products = this.db.products;
  }
  // details
  prodDetails(e) {
//console.log(e);
    this.selectedProd = e;
  }
}
