import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Cart, Product } from 'src/app/interface/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartSub = new BehaviorSubject<Cart[]>([]);
  cart: Cart[] = [];
  // remove to cart
  constructor() {}
  // get all cart product
  getAllCartProduct(): Observable<Cart[]> {
    return this.cartSub.asObservable().pipe(
      tap((da) => {
        // console.log("cart data",da)
      })
    );
  }
  // update cart
  updateCart(cart: Cart[]): void {
    //  console.log("calling update",cart);
    this.cartSub.next(cart);
  }
  // clear cart
  clearCart(): void {
    this.cartSub.next([]);
  }
  // add to cart
  addToCart(prod: Product, quantity: number, cart: Cart[]): Promise<boolean> {
    return new Promise((res, rej) => {
      let cartAddedBefore: Cart[] = cart.filter((p) => p.id == prod.id);
      if (cartAddedBefore.length > 0) {
        cartAddedBefore[0].quantity = quantity;
        this.updateCart(cart);
        return res(true);
      } else {
        let prodCart = { ...prod, quantity: quantity };
        // console.log(prodCart,prod);
        cart.push(prodCart);
        this.updateCart(cart);
        return res(true);
      }
    });
  }
}
