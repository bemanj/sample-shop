import { SalesOrder } from './../../../shared/models/sales-order';
import { DataTableResource } from 'angular-4-data-table';
import { InventoryListService } from './../../../shared/services/inventory-list.service';
import { InventoryList } from './../../../shared/models/inventory-list';
import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'product-selection',
  templateUrl: './product-selection.component.html',
  styleUrls: ['./product-selection.component.css']
})
export class ProductSelectionComponent implements OnInit {
  inventory: InventoryList;
  subscription: Subscription;
  tableResource: DataTableResource<InventoryList>;
  items: InventoryList[] = [];
  itemCount: number;
  @Input('master') masterName: string;
  @Input('sonumber') soNumber: string;
  @Input('salesorder') salesorder: SalesOrder[] = [];

  constructor(private inventoryList: InventoryListService ) { 
    this.subscription = this.inventoryList.getAll()
    .subscribe(inventory => {
      this.inventory = inventory;
      this.initializeTable(inventory);
    });
  }

  private initializeTable(inventoryList: InventoryList[]) {
    this.tableResource = new DataTableResource(inventoryList);
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
