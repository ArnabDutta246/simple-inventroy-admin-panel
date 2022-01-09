import { QueryObj } from './../database/database.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/interface/interfaces';
import { DatabaseService } from '../database/database.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  loaderObs = new BehaviorSubject<boolean>(false);
  loaderSub = this.loaderObs.asObservable();
  prodCollaction = {
    featureCol: 'featureCol',
    offerCol: 'offerCol',
    latestCol: 'latestCol',
  };
  constructor(private database: DatabaseService) {}
  // loader
  loaderUpdate(value: boolean) {
    this.loaderObs.next(value);
  }
  getLoader() {
    return this.loaderObs;
  }
  // get prod admin
  getProductAdmin(
    limit = 40,
    query: QueryObj[] = [{ field: 'offerCol', operator: '==', value: true }]
  ) {
    // console.log('find query', query);
    return this.database
      .getAllDocumentsByQuery(
        this.database.allCollections.products,
        query,
        null,
        limit
      )
      .then((res) => {
        if (!res.empty) {
          return this.simplify(res);
        } else {
          return [];
        }
      });
  }
  // add / insert single product
  addNewProduct(product: Product) {
    return this.database.addDocument(
      this.database.allCollections.products,
      product
    );
  }
  // update product
  updateProduct(product: Product, docId) {
    console.log('product values', product);
    return this.database.updateDocument(
      this.database.allCollections.products,
      docId,
      product
    );
  }
  deleteProdcut(prod) {
    return this.database.deleteDocument(
      this.database.allCollections.products,
      prod.docId
    );
  }

  // simplify products
  simplify(dataArr: any) {
    let returnData = [];
    dataArr.forEach((data) => {
      let dId = data.id;
      returnData.push({ docId: dId, ...data.data() });
    });
    return returnData;
  }

  // get extras
  getExtras() {
    return this.database.getDocumentById(
      this.database.allCollections.extras,
      'data'
    );
  }
  // add brands
  addBrandOrCategory(data: any) {
    return this.database.updateDocument(
      this.database.allCollections.extras,
      'data',
      data
    );
  }

  //===========[ clients]===============
  getClientsProducts(queryObj: QueryObj[] = []) {
    return this.getProductAdmin(16, queryObj);
  }
  //===========[ placedOrder ]==========
  placedOrder(docObject: any) {
    return this.database.addDocument(
      this.database.allCollections.orders,
      docObject
    );
  }
  getOrders(queryObj: QueryObj[] = []) {
    return this.database.getAllDocumentsSnapshotByQuery(
      this.database.allCollections.orders,
      queryObj
    );
  }
}
