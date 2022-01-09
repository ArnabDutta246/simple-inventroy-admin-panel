import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Product } from 'src/app/interface/interfaces';
import { DataService } from 'src/app/shared/data/data.service';
import { ProductsService } from 'src/app/shared/products/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  extraData: any;
  featuredProducts: Product[] = [];
  latestProducts: Product[] = [];
  offerProducts: Product[] = [];
  selectedProd: any = null;
  constructor(private router: Router, private productServ: ProductsService) {}

  ngOnInit(): void {
    this.getAllFeaturedProducts();
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
        // console.log('extras data', data.categories);
        this.productServ.loaderUpdate(false);
      })
      .catch((err) => {
        this.productServ.loaderUpdate(false);
      });
  }

  // get all Products
  getAllFeaturedProducts() {
    // console.log('calling getAllFeaturedProducts');
    // this.featuredProducts = this.db.products;
    Promise.all([
      this.productServ.getClientsProducts([
        {
          field: this.productServ.prodCollaction.featureCol,
          operator: '==',
          value: true,
        },
      ]),
      this.productServ.getClientsProducts([
        {
          field: this.productServ.prodCollaction.latestCol,
          operator: '==',
          value: true,
        },
      ]),
      this.productServ.getClientsProducts([
        {
          field: this.productServ.prodCollaction.offerCol,
          operator: '==',
          value: true,
        },
      ]),
    ])
      .then((result) => {
        //console.log('all result', result);
        this.featuredProducts = result[0];
        this.latestProducts = result[1];
        this.offerProducts = result[2];
      })
      .catch((err) => {
        // console.log('err');
      });
  }

  // go to router
  goToProductsPage() {
    this.router.navigate(['/products']);
  }
  // details
  prodDetails(e) {
    //console.log(e);
    this.selectedProd = e;
  }
}
