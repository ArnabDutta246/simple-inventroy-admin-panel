import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  featuredProducts:any = [];
  constructor(private db:DataService) { }

  ngOnInit(): void {
    this.getAllFeaturedProducts();
  }
  

  // get all Products
  getAllFeaturedProducts(){
    this.featuredProducts = this.db.products;
  }
}
