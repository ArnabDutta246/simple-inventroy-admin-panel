import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cart } from 'src/app/interface/interfaces';
import { CartService } from 'src/app/shared/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  // observables
  cartObs$ = new Subscription();
  cartProd:Cart[] = [];
  emptyCart:boolean = true;
  constructor(
    private cartServ:CartService   
  ) { }
  
  ngOnInit(): void {
  }


  //get carts data
  getCartData():void{ 
    this.cartObs$ = this.cartServ.getAllCartProduct().subscribe(res=>{
     if(res.length){
       this.emptyCart = false;
       this.cartProd = res;
     }else{
      this.emptyCart = true;
     }
  })}
  
}
