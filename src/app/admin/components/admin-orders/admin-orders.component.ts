import { Order } from '../../../shared/models/order';
import { OrderService } from '../../../shared/services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent {
  orders$;
  totalSales$: any;
  sum : number;
  
  constructor(private orderService: OrderService) { 
    this.orders$ = orderService.getOrders();
    orderService.getTotalSales();
    console.log(orderService.totalSales);
    // this.totalSales$ = orderService.totalSales;

  }

  


    
}
