import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/data/data.service';
import { ProductsService } from 'src/app/shared/products/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  extraData:any;
  featuredProducts:any = [];
  selectedProd:any = null;
  constructor(private db:DataService,private router:Router,private productServ:ProductsService) { }

  ngOnInit(): void {
    this.getAllFeaturedProducts();
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
  

  // get all Products
  getAllFeaturedProducts(){
    this.featuredProducts = this.db.products;
  }

    // go to router
    goToProductsPage(){
      this.router.navigate(['/products']);
    }
      // details
  prodDetails(e) {
    //console.log(e);
        this.selectedProd = e;
      }
}
