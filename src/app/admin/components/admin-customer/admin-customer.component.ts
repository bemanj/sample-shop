import { ActivatedRoute, Router } from '@angular/router';
import { DataTableResource } from 'angular-4-data-table';
import { CustomerList } from './../../../shared/models/customer';
import { CustomerService } from './../../../shared/services/customer/customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-customer',
  templateUrl: './admin-customer.component.html',
  styleUrls: ['./admin-customer.component.css']
})
export class AdminCustomerComponent implements OnInit {
customer$ = {};
tableResource: DataTableResource<CustomerList>;
items: CustomerList[] = [];
itemCount: number;

  constructor(
    private customerservice: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.populateCustomers();
  }


  private populateCustomers() {
    this.customerservice
      .getAll()
      .subscribe(products => {
        this.initializeTable(products);
      });
  }

  private initializeTable(customerlist: CustomerList[]) {
    this.tableResource = new DataTableResource(customerlist);
    this.tableResource.query({ offset: 0 })
      .then(items => this.items = items);
    this.tableResource.count()
      .then(count => this.itemCount = count);
  }

  reloadItems(params) {
    if (!this.tableResource) {
      return;
    }
    // console.log('reload happened');
    this.tableResource.query(params)
      .then(items => this.items = items);
  }

  remove(item) {
    // console.log(item.ProductId);
    this.customerservice.delete(item.CustomerID);
  }

}
