import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from "@angular/fire/storage";
import { map, finalize } from "rxjs/operators";
import { Observable } from "rxjs";
import { ProductsService } from 'src/app/shared/products/products.service';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
   extraData:any;
   allBanner = [];
  // file
  selectedFile: File = null;
  fb;
  downloadURL: Observable<string>;
  constructor(private productServ:ProductsService,private storage: AngularFireStorage){}

  ngOnInit(): void {
    // get extra data
    this.getExtraData();
  }
    // get extra data
    getExtraData(){
      this.allBanner = [];
      this.productServ.getExtras().then(res=>{
        let data:any = res.data();
        this.allBanner = data.banners?data.banners:[];
        this.extraData = data;
        //console.log("extras data",data.categories);
      })
    }

  // file upload
onFileSelected(event) {
  let id =  Date.now();   
  const file = event.target.files[0];
  const filePath = `BannerImages/${id}`;
  const fileRef = this.storage.ref(filePath);
  const task = this.storage.upload(`BannerImages/${id}`, file);
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
  if(this.fb){
  this.extraData.banners = this.allBanner.length > 0? [...this.allBanner,this.fb]:[this.fb];
  this.productServ.addBrandOrCategory(this.extraData).then(res=>{
    this.getExtraData();
    this.fb = "";
  });
}
}
deleteBrand(brand){
  this.allBanner = this.allBanner.filter(b=>b !== brand);
  this.extraData.banners = this.allBanner;
  this.productServ.addBrandOrCategory(this.extraData).then(res=>{
    this.getExtraData();
  });
}

}
