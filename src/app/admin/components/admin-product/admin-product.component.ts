import { ProductList } from './../../../shared/models/product-list';
import { ProductService } from './../../../shared/services/product/product.service';
import { Observable } from 'rxjs/Observable';
import { Product } from '../../../shared/models/product';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table';
import 'rxjs/add/operator/switchMap';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {

  subscription: Subscription;
  tableResource: DataTableResource<ProductList>;
  items: ProductList[] = [];
  itemCount: number;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
  ) {
  }

  async ngOnInit() {
    this.populateProducts();
  }

  private populateProducts() {
    this.productService
      .getAll()
      .subscribe(products => {
        this.initializeTable(products);
      });
  }

  private initializeTable(productlist: ProductList[]) {
    this.tableResource = new DataTableResource(productlist);
    this.tableResource.query({ offset: 0 })
      .then(items => this.items = items);
    this.tableResource.count()
      .then(count => this.itemCount = count);
  }

  reloadItems(params) {
    if (!this.tableResource) {
      return;
    }

    this.tableResource.query(params)
      .then(items => this.items = items);
  }

}
