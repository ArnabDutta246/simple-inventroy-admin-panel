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
  allBrands = [];
  name:string|null = null;
  // file
  selectedFile: File = null;
  fb;
  downloadURL: Observable<string>;
  constructor(private productServ:ProductsService,private storage: AngularFireStorage) { }

  ngOnInit(): void {
  }
// file upload
onFileSelected(event) {
  let id =  Date.now()+this.name;   
  const file = event.target.files[0];
  const filePath = `BrandsImages/${id}`;
  const fileRef = this.storage.ref(filePath);
  const task = this.storage.upload(`ProductsImages/${id}`, file);
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

submitBrand(){}
deleteBrand(brand){

}
}
