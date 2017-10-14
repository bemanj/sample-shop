import { ActivatedRoute, Router } from '@angular/router';
import { OrderDetailService } from './../../../shared/services/order-detail.service';
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
  data;
  @Input('master') masterName: string;
  @Input('sonumber') soNumber: string;
  @Input('salesorder') salesorder: SalesOrder[] = [];
  private totalAmount = 0;
  postData$;

  constructor(private inventoryList: InventoryListService,
    private orderdetailService: OrderDetailService,
    private route: ActivatedRoute,
    private router: Router, 
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

    
    if (item.OrderQuantity > 0 && !isNaN(item.OrderQuantity)) {
      
      var postdata;
      // console.log('Amount :' + item.Price * item.OrderQuantity);
      this.route.paramMap
      .subscribe(params => {
        let id = params.get('id');

        this.totalAmount = item.Price * item.OrderQuantity;

        postdata = {
          SalesOrderID: id
          , StockId: item.StockId
          , SalesOrderNumber: 'SO' + id
          , ProductId: item.ProductId
          , UnitPrice: item.Price
          , UOM: item.UOM
          , Quantity: item.OrderQuantity
          , Discount: 0
          , TotalAmount: this.totalAmount
        }

      });

      this.orderdetailService.create(postdata).subscribe(data => this.postData$ = data);

      this.router.navigate(['/order-details']);

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
