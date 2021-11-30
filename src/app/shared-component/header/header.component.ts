import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartLength:number = 0;
  constructor(private cartSev:CartService , private router:Router ) { }

  ngOnInit(): void {
    this.getCartLength();
  }
  getCartLength():void{
   this.cartSev.getAllCartProduct().subscribe(res=>{
     this.cartLength = res.length;
   })
  }

  // go to cart page
  goToCartPage():void{
    this.router.navigate(['/cart']);
  }

}
