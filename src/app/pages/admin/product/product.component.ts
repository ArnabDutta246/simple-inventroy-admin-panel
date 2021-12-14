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
  productsLimit:number = 40;
  productsList:Product[] = [];
  selectedProd:Product;
  addProdPanel:boolean = false;
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

  // submit prod
  submitProd(){
   if(this.fb){ 
    if(this.name && this.brand && this.category && this.price && this.quantity > 1 && this.des){
      if(this.offerCol && (this.offerPrice >0 && this.offerPrice < this.price)){
        this.isWrong = false;
        let data = this.setProd();
        this.productServ.addNewProduct(data).then(res=>{
          console.log("prod inserted",res);
          this.isUpdated = true;
        }).catch(err=>{
          this.isWrong = true;
          this.errMsg = "Somethings went wrong !!! Please Try again";
        });
      }else{
        this.isWrong = true;
        return;
      }
    }else{
      this.isWrong = true;
    }
   }else{
    this.isWrong = true;
   }
  }

  setProd(){
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
    modal:this.id,
   };
   return prod;
  }

  // file upload
  onFileSelected(event) {
    this.id = Date.now();
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
}
