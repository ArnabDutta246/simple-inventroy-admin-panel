import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/data/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  featuredProducts:any = [];
  selectedProd:any = null;
  constructor(private db:DataService,private router:Router) { }

  ngOnInit(): void {
    this.getAllFeaturedProducts();
  }
  

  // get all Products
  getAllFeaturedProducts(){
    this.featuredProducts = this.db.products;
  }

    // go to router
    goToProductsPage(){
      this.router.navigate(['/products']);
    }
      // details
  prodDetails(e) {
    //console.log(e);
        this.selectedProd = e;
      }
}
