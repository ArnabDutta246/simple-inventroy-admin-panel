(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{BUol:function(t,e,n){"use strict";n.d(e,"a",function(){return g});var i=n("fXoL"),s=n("FHx2"),a=n("ofXK"),o=n("bhfF"),r=n("MGQD");function c(t,e){if(1&t&&(i.Pb(0,"div",4),i.Lb(1,"img",5),i.Ob()),2&t){const t=i.Yb().$implicit;i.Ab(1),i.Zb("src",t.imageUrl,i.jc)}}function l(t,e){if(1&t&&(i.Nb(0),i.lc(1,c,2,1,"ng-template",3),i.Mb()),2&t){const t=e.index;i.Ab(1),i.Zb("id",t)}}function d(t,e){if(1&t&&(i.Pb(0,"owl-carousel-o",1),i.lc(1,l,2,1,"ng-container",2),i.Ob()),2&t){const t=i.Yb();i.Zb("options",t.customOptions)("id",t.carouselId),i.Ab(1),i.Zb("ngForOf",t.cardata)}}function p(t,e){if(1&t&&i.Lb(0,"app-single-product",6),2&t){const t=i.Yb().$implicit,e=i.Yb(2);i.Zb("product",t)("showButton",!1)("offer",e.offer)}}function u(t,e){if(1&t&&(i.Nb(0),i.lc(1,p,1,3,"ng-template",3),i.Mb()),2&t){const t=e.index;i.Ab(1),i.Zb("id",t)}}function b(t,e){if(1&t&&(i.Pb(0,"owl-carousel-o",1),i.lc(1,u,2,1,"ng-container",2),i.Ob()),2&t){const t=i.Yb();i.Zb("options",t.customOptions)("id",t.carouselId),i.Ab(1),i.Zb("ngForOf",t.cardata)}}let g=(()=>{class t{constructor(t){this.data=t,this.offer=!1,this.customOptions={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,dots:!1,navSpeed:700,navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],responsive:{0:{items:1},400:{items:2},740:{items:3},940:{items:4}},nav:!0,autoplay:!0,autoplayHoverPause:!1},this.cardata=null}ngOnInit(){}ngOnChanges(){this.showBrandsSlider?this.getBrandsData():this.showProductSlider&&this.getFeaturesProducts()}getBrandsData(){this.cardata=this.data.brand,this.customOptions.responsive={0:{items:2},400:{items:2},740:{items:4},940:{items:6}},this.customOptions.autoplayHoverPause=!1,this.customOptions.navSpeed=400}getFeaturesProducts(){this.cardata=this.data.products,this.customOptions.responsive={0:{items:1},400:{items:2},740:{items:3},940:{items:4}},this.customOptions.autoplayHoverPause=!0,this.customOptions.navSpeed=500}}return t.\u0275fac=function(e){return new(e||t)(i.Kb(s.a))},t.\u0275cmp=i.Eb({type:t,selectors:[["app-carousel"]],inputs:{carouselId:"carouselId",showBrandsSlider:"showBrandsSlider",showProductSlider:"showProductSlider",offer:"offer"},features:[i.yb],decls:2,vars:2,consts:[[3,"options","id",4,"ngIf"],[3,"options","id"],[4,"ngFor","ngForOf"],["carouselSlide","",3,"id"],[1,"card"],["alt","","srcset","",3,"src"],[3,"product","showButton","offer"]],template:function(t,e){1&t&&(i.lc(0,d,2,3,"owl-carousel-o",0),i.lc(1,b,2,3,"owl-carousel-o",0)),2&t&&(i.Zb("ngIf","brands-slider"==e.carouselId),i.Ab(1),i.Zb("ngIf","features-slider"==e.carouselId))},directives:[a.j,o.a,a.i,o.c,r.a],styles:["#brands-slider[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{margin:3px;padding:10px;display:flex;justify-content:center;align-items:center;border:#0000;background:#0000}#brands-slider[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:50px;width:120px}"]}),t})()},FHx2:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var i=n("fXoL");let s=(()=>{class t{constructor(){this.brand=[{brandName:"Philips",imageUrl:"https://www.logo.wine/a/logo/Philips_Consumer_Lifestyle/Philips_Consumer_Lifestyle-Logo.wine.svg"},{brandName:"Kent",imageUrl:"https://zeevector.com/wp-content/uploads/2021/02/Kent-Logo-PNG.png"},{brandName:"LifeUp",imageUrl:"https://www.lifeup.lk/assets/img/homeLogo.png"},{brandName:"Cromptom",imageUrl:"https://www.logolynx.com/images/logolynx/1b/1bdececaf8b780636df25e5969614ada.png"},{brandName:"Voltas",imageUrl:"http://flowtechair.com/wp-content/uploads/2017/02/voltas-logo.png"},{brandName:"syska",imageUrl:"https://www.freepnglogos.com/uploads/xiaomi-png/xiaomi-logo-png-transparent-xiaomi-logo-images-mi-logo-2.png"},{brandName:"Samsung",imageUrl:"https://www.freepnglogos.com/uploads/original-samsung-logo-10.png"}],this.products=[{id:1,name:"DC LED Bulb 5 Watt",price:330,des:"energy savings, Elegents Appearance, Long Life,In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is",modal:"LED1533-12",quantity:1,image:"https://png.pngitem.com/pimgs/s/4-48712_white-light-fluorescent-lamp-incandescent-light-bulb-lamp.png"},{id:2,name:"Best LED Bulb 15 Watt",price:200,des:"energy savings, Elegents Appearance, Long Life",modal:"LED1533-12",quantity:1,image:"https://atlas-content-cdn.pixelsquid.com/stock-images/led-light-bulb-lightbulb-ENAno48-600.jpg"},{id:3,name:"Bulb LED 25 Watt",price:410,des:"energy savings, Elegents Appearance, Long Life",modal:"LED1533-12",quantity:1,image:"https://atlas-content-cdn.pixelsquid.com/stock-images/smart-led-bulb-lightbulb-ZemJYQ1-600.jpg"},{id:4,name:"High Volt Breaker",price:210,des:"energy savings, Elegents Appearance, Long Life",modal:"BREKER1533-12",quantity:1,image:"https://atlas-content-cdn.pixelsquid.com/stock-images/circuit-breaker-63dr5a2-600.jpg"},{id:5,name:"Breaker High Volt ",price:180,des:"energy savings, Elegents Appearance, Long Life",modal:"BREKER1533-12",quantity:1,image:"https://www.pngplay.com/wp-content/uploads/13/Circuit-Breaker-PNG-HD-Quality.png"},{id:6,name:"Switch Smart Board ",price:190,des:"energy savings, Elegents Appearance, Long Life",modal:"BREKER1533-12",quantity:1,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmOrC9-W4kG6DVf_Yaeq0Dw-FpWx7SbK_aTg&usqp=CAU"},{id:7,name:"Breaker High Volt Switch ",price:180,des:"energy savings, Elegents Appearance, Long Life",modal:"BREKER1533-12",quantity:1,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ103xJHMHa96tBlzIeihSF8U1qj_5wcHeX0OhbP-MJL2dU5rAw3uVf-AG9u3vs6DboHko&usqp=CAU"},{id:8,name:"Bulb LED 25 Watt",price:410,des:"energy savings, Elegents Appearance, Long Life",modal:"LED1533-12",quantity:1,image:"https://atlas-content-cdn.pixelsquid.com/stock-images/smart-led-bulb-lightbulb-ZemJYQ1-600.jpg"},{id:9,name:"High Volt Breaker",price:210,des:"energy savings, Elegents Appearance, Long Life",modal:"BREKER1533-12",quantity:1,image:"https://atlas-content-cdn.pixelsquid.com/stock-images/circuit-breaker-63dr5a2-600.jpg"},{id:10,name:"Breaker High Volt ",price:180,des:"energy savings, Elegents Appearance, Long Life",modal:"BREKER1533-12",quantity:1,image:"https://www.pngplay.com/wp-content/uploads/13/Circuit-Breaker-PNG-HD-Quality.png"}]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},MGQD:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var i=n("fXoL"),s=n("ofXK");function a(t,e){1&t&&(i.Pb(0,"span",11),i.mc(1,"20% Off"),i.Ob())}function o(t,e){1&t&&(i.Pb(0,"div",12),i.Pb(1,"div",13),i.Lb(2,"i",14),i.mc(3," Add to cart "),i.Ob(),i.Pb(4,"div",15),i.mc(5," Details "),i.Ob(),i.Ob())}let r=(()=>{class t{constructor(){this.product=null,this.showButton=!0,this.prodDetails=new i.n,this.offer=!1}ngOnInit(){}selectedDetails(t){this.prodDetails.emit(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Eb({type:t,selectors:[["app-single-product"]],inputs:{product:"product",showButton:"showButton",offer:"offer"},outputs:{prodDetails:"prodDetails"},decls:14,vars:6,consts:[[1,"mb-4"],["data-bs-toggle","offcanvas","data-bs-target","#offcanvasRight","aria-controls","offcanvasRight",1,"card","shadow-sm","m-2","p-2","bg-white","rounded","p-card",3,"click"],[1,"d-flex","flex-column","justify-content-center","align-items-center"],[1,"product-image","d-flex","justify-content-center","align-item-center"],["alt","","srcset","",2,"height","200px",3,"src"],[1,"product-info","d-flex","flex-column","justify-content-start","align-items-start"],["class","badge bg-danger",4,"ngIf"],[1,"m-0","fw-bolder"],[1,"m-0","text-muted"],[1,"text-danger"],["class","d-flex justify-content-between align-items-center",4,"ngIf"],[1,"badge","bg-danger"],[1,"d-flex","justify-content-between","align-items-center"],[1,"btn","btn-sm","btn-block","btn-success","mx-1",2,"padding","6px 30px"],[1,"fas","fa-shopping-basket"],[1,"btn","btn-sm","btn-block","btn-light",2,"padding","6px 9px"]],template:function(t,e){1&t&&(i.Pb(0,"div",0),i.Pb(1,"div",1),i.Wb("click",function(){return e.selectedDetails(e.product)}),i.Pb(2,"div",2),i.Pb(3,"div",3),i.Lb(4,"img",4),i.Ob(),i.Pb(5,"div",5),i.lc(6,a,2,0,"span",6),i.Pb(7,"p",7),i.mc(8),i.Ob(),i.Pb(9,"p",8),i.mc(10),i.Ob(),i.Pb(11,"h5",9),i.mc(12),i.Ob(),i.Ob(),i.lc(13,o,6,0,"div",10),i.Ob(),i.Ob(),i.Ob()),2&t&&(i.Ab(4),i.Zb("src",e.product.image,i.jc),i.Ab(2),i.Zb("ngIf",e.offer),i.Ab(2),i.nc(e.product.name),i.Ab(2),i.nc(e.product.modal),i.Ab(2),i.oc("",e.product.price," BDT"),i.Ab(1),i.Zb("ngIf",e.showButton))},directives:[s.j],styles:[".card[_ngcontent-%COMP%]{cursor:pointer}.p-card[_ngcontent-%COMP%]:hover{transition:.3s;transform:scale(1.02);border:.3px solid #dc3545}"]}),t})()},nrdU:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var i=n("ofXK"),s=n("3Pt+"),a=n("fXoL");let o=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({imports:[[i.b,s.b]]}),t})()},y5tF:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var i=n("fXoL"),s=n("quSY"),a=n("f8U6");let o=(()=>{class t{constructor(){}alert(t,e,n){console.log("Alert calling")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var r=n("ofXK"),c=n("3Pt+");function l(t,e){if(1&t&&(i.Pb(0,"div",21),i.Pb(1,"small"),i.mc(2," This Item add to yout cart !! "),i.Pb(3,"b"),i.mc(4),i.Ob(),i.mc(5," units "),i.Lb(6,"button",22),i.Ob(),i.Ob()),2&t){const t=i.Yb(2);i.Ab(4),i.nc(t.prodQuantity)}}function d(t,e){if(1&t){const t=i.Qb();i.Pb(0,"button",23),i.Wb("click",function(){return i.hc(t),i.Yb(2).removeCartProd()}),i.Lb(1,"i",24),i.mc(2," Delete Item "),i.Ob()}}function p(t,e){if(1&t){const t=i.Qb();i.Pb(0,"div",4),i.lc(1,l,7,1,"div",5),i.Pb(2,"div",6),i.Pb(3,"div",7),i.Lb(4,"img",8),i.Ob(),i.Pb(5,"h5",9),i.mc(6),i.Ob(),i.Pb(7,"p"),i.mc(8),i.Ob(),i.Pb(9,"h5",10),i.mc(10),i.Ob(),i.Pb(11,"p",11),i.mc(12),i.Ob(),i.Pb(13,"div",12),i.Pb(14,"button",13),i.Wb("click",function(){return i.hc(t),i.Yb().incrementCartProd()}),i.mc(15,"+"),i.Ob(),i.Lb(16,"input",14),i.Pb(17,"button",15),i.Wb("click",function(){return i.hc(t),i.Yb().decrementCartProd()}),i.mc(18,"-"),i.Ob(),i.Ob(),i.Pb(19,"div",16),i.Pb(20,"div",17),i.Pb(21,"button",18),i.Wb("click",function(){i.hc(t);const e=i.Yb();return e.addToCart(e.product)}),i.Lb(22,"i",19),i.mc(23),i.Ob(),i.lc(24,d,3,0,"button",20),i.Ob(),i.Ob(),i.Ob(),i.Ob()}if(2&t){const t=i.Yb();i.Ab(1),i.Zb("ngIf",t.showAlert),i.Ab(3),i.Zb("src",null==t.product?null:t.product.image,i.jc),i.Ab(2),i.nc(null==t.product?null:t.product.name),i.Ab(2),i.nc(null==t.product?null:t.product.modal),i.Ab(2),i.oc("",null==t.product?null:t.product.price," BDT"),i.Ab(2),i.oc(" ",null==t.product?null:t.product.des," "),i.Ab(4),i.Zb("ngModel",t.prodQuantity),i.Ab(5),i.Zb("ngClass",t.isInTheCart?"btn-success":"btn-primary"),i.Ab(2),i.oc(" ",t.isInTheCart?"Add more":"Add to cart"," "),i.Ab(1),i.Zb("ngIf",t.isInTheCart)}}let u=(()=>{class t{constructor(t,e){this.cartServ=t,this.alert=e,this.carts$=new s.a,this.product=null,this.selected=new i.n,this.prodQuantity=1,this.isInTheCart=!1,this.cartProd=[],this.finalAdded=0,this.showAlert=!1}ngOnInit(){this.getCartData(),this.prodQuantity=1}ngOnDestroy(){this.carts$.unsubscribe(),this.prodQuantity=1,this.isInTheCart=!1}ngOnChanges(){this.carts$.unsubscribe(),this.prodQuantity=1,this.isInTheCart=!1,this.getCartData()}getCartData(){this.carts$=this.cartServ.getAllCartProduct().subscribe(t=>{if(t.length){console.log("all carts products.. details_p_oninit",t);let e=t.filter(t=>t.id==this.product.id);e.length&&(this.isInTheCart=!0,this.showAlert=!0,this.prodQuantity=e[0].quantity)}else this.isInTheCart=!1,this.showAlert=!1})}selectedDetails(t){this.selected.emit(t)}addToCart(t){console.log(t),this.prodQuantity>0&&this.cartServ.addToCart(t,this.prodQuantity,this.cartProd).then(t=>{this.finalAdded=this.prodQuantity})}incrementCartProd(){this.prodQuantity=this.prodQuantity+1,this.showAlert=!1}decrementCartProd(){this.prodQuantity>1&&(this.prodQuantity=this.prodQuantity-1),this.showAlert=!1}removeCartProd(){let t=this.cartProd.filter(t=>t.id!==this.product.id);this.cartServ.updateCart(t),this.prodQuantity=1,this.finalAdded=0}}return t.\u0275fac=function(e){return new(e||t)(i.Kb(a.a),i.Kb(o))},t.\u0275cmp=i.Eb({type:t,selectors:[["app-product-details"]],inputs:{product:"product"},outputs:{selected:"selected"},features:[i.yb],decls:5,vars:1,consts:[[1,"offcanvas-header"],["id","offcanvasRightLabel"],["type","button","data-bs-dismiss","offcanvas","aria-label","Close",1,"btn-close","text-reset","panel-close"],["class","offcanvas-body px-3 py-2","style","position: relative;",4,"ngIf"],[1,"offcanvas-body","px-3","py-2",2,"position","relative"],["class","alert alert-success alert-dismissible fade show","role","alert","style","margin-bottom:0;padding: 0.6rem 1rem;",4,"ngIf"],[2,"position","relative"],[1,"d-flex","justify-content-center","align-items-center"],["alt","","srcset","",2,"height","180px",3,"src"],[1,"fw-bolder"],[1,"text-danger","fw-bolder"],[1,"text-muted"],[1,"mb-3","d-flex","justify-content-center","align-items-center"],["type","button",1,"btn","btn-secondary","rounded-circle","mr-2",3,"click"],["type","text","placeholder","","readonly","",1,"text-center",2,"padding","10px 0px","border","none","background-color","ghostwhite","color","black","font-weight","bolder",3,"ngModel"],["type","button",1,"btn","btn-secondary","rounded-circle","px-3","ml-2",3,"click"],[1,""],[1,"d-grid","gap-2"],["type","button",1,"btn",2,"padding","6px 30px",3,"ngClass","click"],[1,"fas","fa-shopping-basket"],["class","btn btn-outline-danger","type","button","style","padding: 6px 30px;",3,"click",4,"ngIf"],["role","alert",1,"alert","alert-success","alert-dismissible","fade","show",2,"margin-bottom","0","padding","0.6rem 1rem"],["type","button","data-bs-dismiss","alert","aria-label","Close",1,"btn-close",2,"padding","1rem"],["type","button",1,"btn","btn-outline-danger",2,"padding","6px 30px",3,"click"],[1,"far","fa-trash-alt"]],template:function(t,e){1&t&&(i.Pb(0,"div",0),i.Pb(1,"h5",1),i.mc(2,"Product Details"),i.Ob(),i.Lb(3,"button",2),i.Ob(),i.lc(4,p,25,10,"div",3)),2&t&&(i.Ab(4),i.Zb("ngIf",e.product))},directives:[r.j,c.a,c.c,c.d,r.h],styles:[".panel-close[_ngcontent-%COMP%]{border-radius:50%!important;box-shadow:0 2px 3px grey!important}"]}),t})()}}]);