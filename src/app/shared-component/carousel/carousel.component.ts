import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { SlidesOutputData, OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/shared/data/data.service';
export enum CarouselId{
  brands = "brands-slider",
  features = "features-slider"
}
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit,OnChanges {
  @Input() carouselId:string;
  @Input() showBrandsSlider:boolean;
  @Input() showProductSlider:boolean;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa-chevron-left"></i>', '<i class="fa-chevron-right></i>"'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false,
    autoplay:true,
    autoplayHoverPause:true,

  }
  // data
  cardata:any = null;
  constructor(
    private data:DataService
  ) { }

  ngOnInit(): void {
    // this.getBrandsData();
  }
  ngOnChanges():void{
    if(this.showBrandsSlider){
      this.getBrandsData();
    }else if(this.showProductSlider){
      this.getFeaturesProducts();
    }
  }
  // get brands data
  getBrandsData(){
   this.cardata = this.data.brand;
   this.customOptions.responsive = {0: { items: 1}, 400: {items: 2},740: { items: 4 },940: {
    items: 6}};
  this.customOptions.autoplayHoverPause = false;
  this.customOptions.navSpeed = 400;
  }

  getFeaturesProducts(){
    this.cardata = this.data.products;
    this.customOptions.responsive = {0: { items: 1}, 400: {items: 2},740: { items: 3 },940: {
     items: 4}};
   this.customOptions.autoplayHoverPause = true;
   this.customOptions.navSpeed = 500;
  }
}
