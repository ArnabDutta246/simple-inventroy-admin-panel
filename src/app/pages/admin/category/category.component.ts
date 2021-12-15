import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/products/products.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  extraData:any;
  allCategories = [];
  name:string|null = null;
  constructor(private productServ:ProductsService) { }

  ngOnInit(): void {
    // get extra data
    this.getExtraData();
  }
    // get extra data
    getExtraData(){
      this.allCategories = [];
      this.productServ.getExtras().then(res=>{
        let data:any = res.data();
        this.allCategories = data.categories;
        this.extraData = data;
        console.log("extras data",data.categories);
      })
    }
  submitBrand(){
    if(this.name){
    this.extraData.categories = [...this.allCategories,this.name];
    this.productServ.addBrandOrCategory(this.extraData).then(res=>{
      this.getExtraData();
    });
  }
  }
  deleteBrand(cat){
    this.allCategories = this.allCategories.filter(b=>b !== cat);
    this.extraData.categories = this.allCategories;
    this.productServ.addBrandOrCategory(this.extraData).then(res=>{
      this.getExtraData();
    });
  }
}
