import { Component, OnInit } from '@angular/core';

import { AngularFireStorage } from "@angular/fire/storage";
import { map, finalize } from "rxjs/operators";
import { Observable } from "rxjs";
import { ProductsService } from 'src/app/shared/products/products.service';
@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {
  extraData:any;
  allBrands = [];
  name:string|null = null;
  // file
  selectedFile: File = null;
  fb;
  downloadURL: Observable<string>;
  constructor(private productServ:ProductsService,private storage: AngularFireStorage) { }

  ngOnInit(): void {
    // get extra data
    this.getExtraData();
  }
  
  // get extra data
  getExtraData(){
    this.allBrands = [];
    this.productServ.getExtras().then(res=>{
      let data:any = res.data();
      this.allBrands = data.brands;
      this.extraData = data;
      console.log("extras data",data.brands);
    })
  }

// file upload
onFileSelected(event) {
  let id =  Date.now()+this.name;   
  const file = event.target.files[0];
  const filePath = `BrandsImages/${id}`;
  const fileRef = this.storage.ref(filePath);
  const task = this.storage.upload(`BrandsImages/${id}`, file);
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

submitBrand(){
  if(this.name && this.fb){
  let newBreands = [{name:this.name,image:this.fb}];
  this.extraData.brands = [...this.allBrands,...newBreands];
  this.productServ.addBrandOrCategory(this.extraData).then(res=>{
    this.getExtraData();
    this.name = "";
    this.fb = "";
  });
}
}
deleteBrand(brand){
  this.allBrands = this.allBrands.filter(b=>b.name !== brand.name);
  this.extraData.brands = this.allBrands;
  this.productServ.addBrandOrCategory(this.extraData).then(res=>{
    this.getExtraData();
  });
}
}
