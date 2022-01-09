import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/products/products.service';
import * as moment from 'moment';

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
    let orderDate = moment(this.selectedDate).format();
    let orderEnd = new Date(moment(this.selectedDate).add(1, 'day').format());
    let query = [
      {
        field: 'date',
        operator: '>=',
        value: new Date(orderDate),
      },
      {
        field: 'date',
        operator: '<=',
        value: new Date(orderEnd),
      },
    ];
    this.prodServ.loaderUpdate(true);
    this.prodServ
      .getOrders(query)
      .pipe(
        map((res) => {
          return res.map((a) => a.payload.doc.data());
        })
      )
      .subscribe((res) => {
        this.prodServ.loaderUpdate(false);
        console.log('all orders', res);
        this.allOrders = res;
        //this.allOrders = this.allOrders.sort((a, b) => a > b);
      });
  }

  selectedOrder(order) {
    this.selectedOrderDetails = order;
  }
}
