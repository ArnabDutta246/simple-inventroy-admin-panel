import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/interface/interfaces';
import { ProductsService } from 'src/app/shared/products/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @ViewChild('prodList',{ read: ElementRef }) prodList: ElementRef;
  @ViewChild('addProd',{ read: ElementRef }) addProd: ElementRef;
  // variables
  productsLimit:number = 40;
  productsList:Product[] = [];
  selectedProd:Product;
  addProdPanel:boolean = false;
  name:string|null = null;
  brand:string|null = null;
  price:number|null = null;
  des:string|null = null;
  quantity:number = 1;
  category:string|null = null;
  featureCol:boolean = false;
  latestCol:boolean = false;
  offerCol:boolean = false;
  offerPrice:number|null = null;

  constructor(private productServ:ProductsService) { }

  ngOnInit(): void {
  this.fetchAllProducts();
  }


  // fetch all products
  fetchAllProducts(){
   this.productsList = [];
   this.productServ.getProductAdmin(this.productsLimit).then(
     res=>{
       console.log(res);
       this.productsList = res;
     }
   ).catch(err=>{
     this.productsList = [];
   })
  }

  // switch to add prod section
  switchToAddSection(editProd:Product|null = null){
    if(editProd){
      this.selectedProd = editProd;
    }
    this.addProdPanel = true;
    this.addProd.nativeElement.click();
  }

}
