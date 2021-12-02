import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cart, Product } from 'src/app/interface/interfaces';
import { CartService } from 'src/app/shared/cart/cart.service';
import { CommonService } from 'src/app/shared/common/common.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit,OnChanges,OnDestroy {
  // observables
  carts$ = new Subscription();
  @Input() product: any = null;
  @Output() selected = new EventEmitter<any>();
  prodQuantity: number = 1;
  isInTheCart:boolean = false;
  cartProd:Cart[] = [];
  constructor(
    private cartServ:CartService,
    private alert:CommonService    
  ) {}

  ngOnInit(): void {
    this.getCartData();
    this.prodQuantity = 1;
  }
  ngOnDestroy(){
    this.carts$.unsubscribe();
    this.prodQuantity = 1;
    this.isInTheCart = false;
  }
  ngOnChanges(){
    this.carts$.unsubscribe();
    this.prodQuantity = 1;
    this.isInTheCart = false;
    this.getCartData();
  }
  //get carts data
  getCartData():void{ 
    this.carts$ = this.cartServ.getAllCartProduct().subscribe(res=>{
     if(res.length){
       console.log("all carts products.. details_p_oninit",res);
       let prodExist:Cart[] = res.filter(res=>res.id == this.product.id);
       if(prodExist.length){
         this.isInTheCart = true;
         this.prodQuantity = prodExist[0].quantity;  
        };
     }else{
       this.isInTheCart = false;
     }
  })}
  // selected details
  selectedDetails(prod) {this.selected.emit(prod);}   
  // add to cart
  addToCart(prod:Product):void{ 
    console.log(prod);
    if(this.prodQuantity>0){
    this.cartServ.addToCart(prod,this.prodQuantity,this.cartProd).then(res=>{
      if(res){
        this.alert.alert('This product add to your cart, you can change quantity in cart page.Continue shopping','Product added','success')
      }
    });
    }
  }
  // increment
  incrementCartProd(){this.prodQuantity = this.prodQuantity + 1;}
  // decrement
  decrementCartProd(){ if(this.prodQuantity > 1) this.prodQuantity = this.prodQuantity - 1;}
  // remove 
  removeCartProd(){
    let cart = this.cartProd.filter(p=>p.id !== this.product.id);
    this.cartServ.updateCart(cart);
    this.prodQuantity = 1;  
  }
}          
