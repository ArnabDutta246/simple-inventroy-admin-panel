import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  @Input() product: any = null;
  @Output() selected = new EventEmitter<any>();
  prodQuantity: number = 10;
  constructor() {}

  ngOnInit(): void {}

  // selected details
  selectedDetails(prod) {
    this.selected.emit(prod);
  }
}
