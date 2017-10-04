import { InventoryListService } from './../../../shared/services/inventory-list.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CategoryService } from '../../../shared/services/category.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take'; 

@Component({
  selector: 'inventory-stocks',
  templateUrl: './inventory-stocks.component.html',
  styleUrls: ['./inventory-stocks.component.css']
})
export class InventoryStocksComponent implements OnInit {
  categories$;
  inventory = {}; 
  id;
  momentValue;

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private categoryService: CategoryService, 
    private inventoryService: InventoryListService) {
    this.categories$ = categoryService.getAll();

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.inventoryService.get(this.id).take(1).subscribe(p => this.inventory = p);
  }

  save(inventory) { 
    // if (this.id) this.productService.update(this.id, product);
    // else this.productService.create(product);
    
    this.router.navigate(['/admin/products']);
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
