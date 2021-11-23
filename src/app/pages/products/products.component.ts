import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products:any[] = [];
  constructor(
    private db:DataService
  ) { }

  ngOnInit(): void {
   this.getAllProducts();
  }

  // get products
  getAllProducts(){
   this.products = this.db.products;
  }


}
