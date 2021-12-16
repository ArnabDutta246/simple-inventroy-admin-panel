import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/products/products.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  extraData:any;
  constructor(private productServ:ProductsService) { }

  ngOnInit(): void {
    this.getExtraData()
  }
  // get extra data
  getExtraData(){
    this.productServ.loaderUpdate(true);
    this.productServ.getExtras().then(res=>{
      let data:any = res.data();
      this.extraData = data;
      console.log("extras data",data.categories);
      this.productServ.loaderUpdate(false);
    }).catch(err=>{
      this.productServ.loaderUpdate(false);
    })
  }
}
