import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cart } from 'src/app/interface/interfaces';
import { CartService } from 'src/app/shared/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit,OnDestroy {
  @ViewChild('profileTab',{ read: ElementRef }) profileTab: ElementRef;
  @ViewChild('summaryTab',{ read: ElementRef }) summaryTab: ElementRef;
  // observables
  cartObs$ = new Subscription();
  cartProd:Cart[] = [];
  emptyCart:boolean = true;
  totalItems:number = 0;
  totalPrice:number = 0;
  profileSec:boolean = true;
  summarySec:boolean = true;
  name:string;
  phone:any;
  address:string;
  isWrong:boolean = false;
  constructor(
    private cartServ:CartService,
    private router:Router,   
  ) { }
  
  ngOnInit(): void {
    this.getCartData();
  }

  ngOnDestroy(){
    this.cartObs$.unsubscribe();
  }

  //get carts data
  getCartData():void{ 
    this.cartObs$ = this.cartServ.getAllCartProduct().subscribe(res=>{
     if(res.length){
       this.emptyCart = false;
       this.cartProd = res;
       this.cartProd.forEach(c=>this.totalPrice = c.quantity * c.price + this.totalPrice)
     }else{
      this.emptyCart = true;
     }
  })}
    // increment
    incrementCartProd(prod:Cart){prod.quantity +=  1;this.totalPrice = prod.price + this.totalPrice}
    // decrement
    decrementCartProd(prod:Cart){ if(prod.quantity > 1){ prod.quantity = prod.quantity - 1;this.totalPrice =  this.totalPrice - prod.price}}
    // remove 
    removeCartProd(prod:Cart){
      let cart = this.cartProd.filter(p=>p.id !== prod.id);
      this.cartServ.updateCart(cart);
    } 
      
    // go to router
    goToProductsPage(){
      this.router.navigate(['/products']);
    }

    // proceedToProfile
    proceedToProfile(){
      this.profileSec = false;
      this.profileTab.nativeElement.click();
    }

    // proceedToSummay
    proceedToSummary(){
      console.log(this.name, this.phone, this.address)
      if(this.name && this.phone && this.address){
      this.summarySec = false;
      this.isWrong = false;
      this.summaryTab.nativeElement.click();  
     }else{
      this.isWrong = true;
     }
    }
    placedOrder(){

    }
}
