import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-single-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: any = null;
  @Input() showButton: boolean = true;
  @Output() prodDetails = new EventEmitter<any>();
  @Input() offer: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  // selected details
  selectedDetails(prod): void {
    this.prodDetails.emit(prod);
  }
}
