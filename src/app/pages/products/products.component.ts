import { Product } from './../../interface/interfaces';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/data/data.service';
import { ProductsService } from 'src/app/shared/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  extraData: any;
  products: Product[] | null = null;
  selectedProd: any = null;
  categoryChoose: string = '';
  constructor(
    private db: DataService,
    private router: Router,
    private productServ: ProductsService
  ) {}

  ngOnInit(): void {
    this.getExtraData();
  }
  // get extra data
  getExtraData() {
    this.productServ.loaderUpdate(true);
    this.productServ
      .getExtras()
      .then((res) => {
        let data: any = res.data();
        this.extraData = data;
        this.categoryChoose = this.extraData.categories[0];
        // console.log('extras data', data.categories);
        this.getAllProducts(this.extraData.categories[0]);
      })
      .catch((err) => {
        this.productServ.loaderUpdate(false);
      });
  }

  // get products
  getAllProducts(cat: string = '') {
    //console.log('category changes:', cat);
    // this.products = this.db.products;
    this.productServ.loaderUpdate(true);
    this.productServ
      .getClientsProducts([
        {
          field: 'category',
          operator: '==',
          value: cat,
        },
      ])
      .then((res) => {
        this.products = res;
        this.productServ.loaderUpdate(false);
      })
      .catch((err) => {
        console.log(err);
        this.productServ.loaderUpdate(false);
      });
  }
  // details
  prodDetails(e) {
    //console.log(e);
    this.selectedProd = e;
  }
}
