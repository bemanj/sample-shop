import { SelectedProduct } from './../../../shared/models/selected-product';
import { ParentDialogComponent } from './../parent-dialog/parent-dialog.component';
import { DialogService } from 'ng2-bootstrap-modal';
import { SalesOrder } from './../../../shared/models/sales-order';
import { DataTableResource } from 'angular-4-data-table';
import { InventoryListService } from './../../../shared/services/inventory-list.service';
import { InventoryList } from './../../../shared/models/inventory-list';
import { Component, OnInit, Input} from '@angular/core';
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
  order;
  @Input('master') masterName: string;
  @Input('sonumber') soNumber: string;
  @Input('salesorder') salesorder: SalesOrder[] = [];

  constructor(private inventoryList: InventoryListService,
    private dialogService:DialogService ) { 
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
    // alert('test save function');
    var date = new Date();
       // this.inventoryService.create(invdata).subscribe(data => this.inventories$ = data);;
      // console.log(invdata);
      // console.log('id ' + this.id);
      //  this.inventoryService.create(invdata).subscribe(data => this.inventories$ = data);
      //  this.router.navigate(['/inventory-list']);
      // console.log(item.$id + ' qty ' + item.price);
      if (item.OrderQuantity > 0 && !isNaN(item.OrderQuantity)) {
        console.log('Amount :' + item.Price * item.OrderQuantity);
      }
      else{
        alert('Invalid quantity :' + item.OrderQuantity);
      }
      
    }

  ngOnInit() {
  }

  showParentDialog() {
    this.dialogService.addDialog(ParentDialogComponent);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
