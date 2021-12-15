import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/interface/interfaces';
import { ProductsService } from 'src/app/shared/products/products.service';
import { AngularFireStorage } from "@angular/fire/storage";
import { map, finalize } from "rxjs/operators";
import { Observable } from "rxjs";
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @ViewChild('prodList',{ read: ElementRef }) prodList: ElementRef;
  @ViewChild('addProd',{ read: ElementRef }) addProd: ElementRef;
  // variables
  extraData:any;
  allCategories = [];
  allBrands = [];
  productsLimit:number = 40;
  productsList:Product[] = [];
  selectedProd:Product;
  addProdPanel:boolean = false;
  editMode:boolean = false;
  //
  id:any|null = null;
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
  docId:string|null = null;
  //
  isWrong:boolean = false;
  errMsgDef = "Some Information is missing !! please enter your proper product information.";
  errMsg:string = "Some Information is missing !! please enter your proper product information.";
  isUpdated:boolean = false;
  // file
  selectedFile: File = null;
  fb;
  downloadURL: Observable<string>;
  constructor(private productServ:ProductsService,private storage: AngularFireStorage) { }

  ngOnInit(): void {
  this.fetchAllProducts();
     // get extra data
     this.getExtraData();
    }
    // get extra data
    getExtraData(){
      this.allCategories = [];
      this.allBrands = [];
      this.productServ.getExtras().then(res=>{
        let data:any = res.data();
        this.allCategories = data.categories;
        this.allBrands = data.brands;
        this.extraData = data;
        console.log("extras data",data.categories);
      })
    }
  // fetch all products
  fetchAllProducts(){
   this.isUpdated = false;
   this.isWrong = false;
   this.editMode = false;
   this.addProdPanel = false;
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

  // submit prod
  submitProd(){
    console.log("Object here",this.setProd());
   if(this.fb){ 
    if(this.name && this.brand && this.category && this.price && this.quantity >= 1 && this.des){
      if(this.offerCol && (this.offerPrice  == 0 || this.offerPrice > this.price)){
        return;
      }else{
        this.isWrong = false;
        let data = this.setProd();
        if(!this.editMode){
          return this.productServ.addNewProduct(data).then(res=>{
            console.log("prod inserted",res);
            this.isUpdated = true;
            // reset
            this.resetAll();
          }).catch(err=>{
            this.isWrong = true;
            this.errMsg = "Somethings went wrong !!! Please Try again";
          });
      }else{
          return this.productServ.updateProduct(data,this.docId).then(res=>{
            console.log("prod inserted",res);
            this.isUpdated = true;
          }).catch(err=>{
            console.log(err);
            this.isWrong = true;
            this.errMsg = "Somethings went wrong !!! Please Try again";
          });
      }
        
      }
    }else{
      this.isWrong = true;
    }
   }else{
    this.isWrong = true;
   }
  }

  setProd(product?:Product){
   let prod:Product = {
    id:this.id,
    name:this.name,
    brand:this.brand,
    price:this.price,
    des:this.des,
    quantity:this.quantity,
    category:this.category,
    featureCol:this.featureCol,
    latestCol:this.latestCol,
    offerCol:this.offerCol,
    offerPrice:this.offerPrice,
    image:this.fb,
    modal:this.category+this.id,
   };

   return prod;
  }

  // file upload
  onFileSelected(event) {
    this.id = this.editMode? this.id: Date.now();   
    const file = event.target.files[0];
    const filePath = `ProductsImages/${this.id}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`ProductsImages/${this.id}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;
            }
            console.log(this.fb);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }
  // reset all
  resetAll(){
    this.id = null;
    this.name = null;
    this.brand = null;
    this.price = null;
    this.des = null;
    this.quantity = null;
    this.category = null;
    this.featureCol = null;
    this.latestCol = null;
    this.offerCol = null;
    this.offerPrice = null;
    this.fb = null;
    this.editMode = true;
    this.docId = null;
  }
  // edit product
  editProductData(prod){
    console.log("prod",prod);
   // this.setProd(prod);
    this.id = prod.id;
    this.name = prod.name;
    this.brand = prod.brand;
    this.price = prod.price;
    this.des = prod.des;
    this.quantity = prod.quantity;
    this.category = prod.category;
    this.featureCol = prod.featureCol;
    this.latestCol = prod.latestCol;
    this.offerCol = prod.offerCol;
    this.offerPrice = prod.offerPrice;
    this.fb = prod.image;
    this.editMode = true;
    this.docId = prod.docId;
    this.switchToAddSection();
  }
  // edit upload 
  editProdData(){
    if(this.editMode){

    }
  }
  // delete prod
  deleteProd(prod){}
}
