import { OrderDetailService } from '../../../shared/services/order-detail.service';
import { OrderDetailList } from '../../../shared/models/order-detail';
import { SalesOrder } from './../../../shared/models/sales-order';
import { DataTableResource } from 'angular-4-data-table';
import { InventoryListService } from './../../../shared/services/inventory-list.service';
import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  orderdetails: OrderDetailList;
  subscription: Subscription;
  tableResource: DataTableResource<OrderDetailList>;
  items: OrderDetailList[] = [];
  itemCount: number;
  @Input('master') masterName: string;
  @Input('sonumber') soNumber: string;
  @Input('salesorder') salesorder: SalesOrder[] = [];

  constructor(private orderdetailList: OrderDetailService ) { 
    this.subscription = this.orderdetailList.getAll()
    .subscribe(orders => {
      this.orderdetails = orders;
      this.initializeTable(orders);
    });
  }

  private initializeTable(orderdetailList: OrderDetailList[]) {
    this.tableResource = new DataTableResource(orderdetailList);
    this.tableResource.query({ offset: 0 })
      .then(items => this.items = items);
    this.tableResource.count()
      .then(count => this.itemCount = count);
  }

  reloadItems(params) {
    if (!this.tableResource) return;

    this.tableResource.query(params)
      .then(items => this.items = items);    
  }

  save(item) {
    console.log('order detail ' + item  + 'sales order id: ' + this.salesorder);
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
