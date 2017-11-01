import { CustomerService } from './../../../shared/services/customer/customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-customer',
  templateUrl: './admin-customer.component.html',
  styleUrls: ['./admin-customer.component.css']
})
export class AdminCustomerComponent implements OnInit {

  constructor(private customerservice: CustomerService) { }

  ngOnInit() {
    this.customerservice.getAll().subscribe();
  }

}
