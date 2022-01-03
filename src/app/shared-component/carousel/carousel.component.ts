import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { SlidesOutputData, OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/shared/data/data.service';
export enum CarouselId {
  brands = 'brands-slider',
  features = 'features-slider',
}
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit, OnChanges {
  @Input() carouselId: string;
  @Input() showBrandsSlider: boolean;
  @Input() showProductSlider: boolean;
  @Input() offer: boolean = false;
  @Output() prodDetailsE = new EventEmitter<any>();
  @Input() dataFromParents: any;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
    autoplay: true,
    autoplayHoverPause: false,
    // navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
  };
  // data
  cardata: any = null;
  selectedProd: any;
  constructor(private data: DataService) {}

  ngOnInit(): void {
    // this.getBrandsData();
  }
  ngOnChanges(): void {
    if (this.showBrandsSlider) {
      this.getBrandsData();
    } else if (this.showProductSlider) {
      this.getFeaturesProducts();
    }
  }
  // get brands data
  getBrandsData() {
    this.cardata = this.dataFromParents;
    this.customOptions.responsive = {
      0: { items: 2 },
      400: { items: 2 },
      740: { items: 5 },
      940: {
        items: 6,
      },
    };
    this.customOptions.autoplayHoverPause = false;
    this.customOptions.navSpeed = 400;
  }

  getFeaturesProducts() {
    this.cardata = this.dataFromParents;
    this.customOptions.responsive = {
      0: { items: 1 },
      400: { items: 2 },
      740: { items: 3 },
      940: {
        items: 4,
      },
    };
    this.customOptions.autoplayHoverPause = true;
    this.customOptions.navSpeed = 500;
  }
  // details
  prodDetails(e) {
    //console.log(e);
    this.prodDetailsE.emit(e);
  }
}
