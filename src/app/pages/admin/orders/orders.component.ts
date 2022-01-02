import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/products/products.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  selectedDate: any;
  selectedOrderDetails: any;
  allOrders = [];
  constructor(private prodServ: ProductsService) {
    this.selectedDate = new Date();
  }

  ngOnInit(): void {
    this.fetchOrders();
  }

  fetchOrders() {
    this.prodServ.loaderUpdate(true);
    this.prodServ
      .getOrders()
      .pipe(
        map((res) => {
          return res.map((a) => a.payload.doc.data());
        })
      )
      .subscribe((res) => {
        this.prodServ.loaderUpdate(false);
        console.log('all orders', res);
        this.allOrders = res;
      });
  }

  selectedOrder(order) {
    this.selectedOrderDetails = order;
  }
}
