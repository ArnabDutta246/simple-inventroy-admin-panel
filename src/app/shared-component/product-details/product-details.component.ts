import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Cart, Product } from 'src/app/interface/interfaces';
import { CartService } from 'src/app/shared/cart/cart.service';
import {map} from "rxjs/operators"
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit,OnChanges {
  @Input() product: any = null;
  @Output() selected = new EventEmitter<any>();
  prodQuantity: number = 1;
  isInTheCart:boolean = false;
  cartProd:Cart[] = [];
  constructor(
    private cartServ:CartService
  ) {}

  ngOnInit(): void {
    this.getCartData();
  }
  ngOnChanges(){}
  //get carts data
  getCartData():void{ 
    this.cartServ.getAllCartProduct().subscribe(res=>{
     if(res.length){
       console.log("all carts products",res);
       let prodExist = res.filter(res=>res.id == this.product.id);
       if(prodExist.length){this.isInTheCart = true};
     }
  })}
  // selected details
  selectedDetails(prod) {this.selected.emit(prod);}   
  // add to cart
  addToCart(prod:Product):void{ if(this.prodQuantity>0)this.cartServ.addToCart(prod,this.prodQuantity,this.cartProd);}
  // increment
  incrementCartProd(){this.prodQuantity = this.prodQuantity + 1;}
  // decrement
  decrementCartProd(){ if(this.prodQuantity > 1) this.prodQuantity = this.prodQuantity - 1;}
  // remove 
  removeCartProd(){
    let cart = this.cartProd.filter(p=>p.id !== this.product);
    this.cartServ.updateCart(cart);  
  }
}          
