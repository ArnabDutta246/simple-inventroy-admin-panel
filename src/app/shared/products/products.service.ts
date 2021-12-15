import { Injectable } from '@angular/core';
import { Product } from 'src/app/interface/interfaces';
import { DatabaseService } from '../database/database.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private database:DatabaseService) { }

  // get prod admin
  getProductAdmin(limit = 40){
   return this.database.getAllDocumentsByQuery(this.database.allCollections.products,[],null,limit)
   .then(
     (res)=>{ 
       if(!res.empty){
       return this.simplify(res);
      }else{
       return [];
      }
    }
   );
  }
  // add / insert single product
  addNewProduct(product:Product){
    return this.database.addDocument(this.database.allCollections.products,product);
  }
  // update product
  updateProduct(product:Product,docId){
    console.log("product values",product);
    return this.database.updateDocument(this.database.allCollections.products,docId,product);
  }

  // simplify products
  simplify(dataArr:any){
    let returnData = [];
     dataArr.forEach(data=>{
       let dId = data.id;
      returnData.push({docId:dId,...data.data()});
    })
    return returnData;
  }

  // get extras
  getExtras(){
    return this.database.getDocumentById(this.database.allCollections.extras,"data");
  }
  // add brands 
  addBrandOrCategory(data:any){
   return this.database.updateDocument(this.database.allCollections.extras,'data',data);
  }
}
