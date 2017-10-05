import { InventoryListService } from './../../../shared/services/inventory-list.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CategoryService } from '../../../shared/services/category.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take'; 
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'inventory-stocks',
  templateUrl: './inventory-stocks.component.html',
  styleUrls: ['./inventory-stocks.component.css']
})
export class InventoryStocksComponent implements OnInit {
  inventories$;
  inventory = {}; 
  id;
  momentValue;

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private categoryService: CategoryService, 
    private inventoryService: InventoryListService) {
    this.inventories$ = inventoryService.getAll();

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.inventoryService.get(this.id).take(1).subscribe(p => this.inventory = p);
  }

  save(inventory) {
    // alert('test save function');
    var date = new Date();
      var invdata = {
           PONumber: inventory.ponumber
        , StockId: inventory.stockid
        , SupplierId: inventory.supplierid
        , ProductId: inventory.productid
        , Brand: inventory.brand
        , Quantity: inventory.quantity
        , Price: inventory.price
        , AcquisitionPrice: inventory.acquisitionprice
        , DateDelivered: '05/10/2017'
        , DateDisposed: '05/10/2017'
        , ModifiedDate: '05/10/2017'
        // , DateDelivered: date
        // , DateDisposed: date
        // , ModifiedDate: date
        , PutAwayLocation: 1
      }
      // console.log(invdata);
       if (this.id) this.inventoryService.update(this.id, invdata);
       else this.inventoryService.create(invdata).subscribe(data => this.inventories$ = data);
      // console.log(this.soNumber$);
    }

  delete() {
    if (!confirm('Are you sure you want to delete this product?')) return;
    
    // this.productService.delete(this.id);
    this.router.navigate(['/inventory-list']);
  }

  public setMoment(moment: any): any {
    this.momentValue = moment;
    // Do whatever you want to the return object 'moment'
  }

  ngOnInit() {
  }

}
