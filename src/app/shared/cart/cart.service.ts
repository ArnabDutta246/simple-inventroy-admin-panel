import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart, Product } from 'src/app/interface/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartSub = new BehaviorSubject<Cart[]>([]);
  cart:Cart[] = [];
  // remove to cart
  constructor() { }
  // get all cart product
  getAllCartProduct():Observable<Cart[]>{
    return this.cartSub.asObservable()
  }
  // update cart
  updateCart(cart:Cart[]):void{
    this.cartSub.next(cart);
  }
  // clear cart
  clearCart():void{
    this.cartSub.next([]);  
  }
  // add to cart
  addToCart(prod:Product,quantity:number,cart:Cart[]) {
    let cartAddedBefore:Cart[] = cart.filter((p) => p.id == prod.id);
    if (cartAddedBefore.length) {
      cartAddedBefore[0].quantity = quantity;
      this.updateCart(cart);
    }
  }
}
