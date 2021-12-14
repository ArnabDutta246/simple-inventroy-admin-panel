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

  // simplify products
  simplify(dataArr:any){
    let returnData = [];
     dataArr.forEach(data=>{
      returnData.push({...data.data()});
    })
    return returnData;
  }
}
