import { CustomerService } from '../../../shared/services/customer/customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
id;
c = {};

  constructor(private customerservice: CustomerService) { }

  save(i) {
    // alert('test save function');
      alert('Customer  will be save');

      // console.log('coy ' + p.Company);

      const newcustomer = {
        CompanyName: i.company,
        ContactName: i.contactname,
        ContactTitle: i.contacttitle,
        Address: i.address,
        City: i.city,
        Region: i.region,
        PostalCode: i.postal,
        Country: i.country,
        Phone: i.phone,
        Fax: i.fax,
        Terms: i.terms
      };

      // const updatedcustomer = {
      //   ProductId: this.id,
      //   CategoryID: p.category,
      //   ProductTitle: p.ProductTitle,
      //   ReorderLevel: p.ReorderLevel,
      //   Discontinued: p.Discontinued
      // };
// console.log(newcustomer);
      this.customerservice.create(newcustomer).subscribe();
      // alert('Created'); not working

      // console.log(newproduct);
      // if (this.id) {
      //   this.customerservice.update(this.id, updatedproduct);
      // } else {
      //   this.customerservice.create(newproduct).subscribe();
      // }
        // console.log('update so' + this.orderHeader.SalesOrderID)
    }

  ngOnInit() {
  }

}
