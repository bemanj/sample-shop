import { CustomerService } from './../../../shared/services/customer/customer.service';
import { CustomerList } from './../../../shared/models/customer';
import { CategoryPostService } from './../../../shared/services/category/category-post.service';
import { SalesReportService } from './../../../shared/services/sales-service/sales-report.service';
import { SalesReport } from './../../../shared/models/sales-report';
import { SalesOrder } from './../../../shared/models/sales-order';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { DataTableResource } from 'angular-4-data-table';
import { Component, OnInit, Input, NgModule, OnDestroy } from '@angular/core';
import 'rxjs/add/operator/take';

@Component({
  selector: 'sales-order',
  templateUrl: './sales-order.component.html',
  styleUrls: ['./sales-order.component.css']
})
export class SalesOrderComponent implements OnInit, OnDestroy {
  btn = 'New';
  soNumber$ = '';
  data = '';
  postStatus: any;
  salesReport: SalesReport[];
  subscription: Subscription;
  tableResource: DataTableResource<SalesReport>;
  items: SalesReport[] = [];
  itemCount: number;
  sonumber;
  soid;
  sodatalist = {};
  // orderHeader = new SalesOrder();
  orderHeader = {};
  master;
  customer: CustomerList[];
  customer$;

  // @Input('category') category;

  constructor(private categorypostservice: CategoryPostService,
    private salesreportservice: SalesReportService,
    private customerservice: CustomerService,
    private router: Router,
    private route: ActivatedRoute) {

      // this.soid = this.route.snapshot.paramMap.get('id');
      // this.salesreportservice.getfSO(this.soid).subscribe(p => {
      //   this.orderHeader= p
      // });
      this.soid = this.route.snapshot.paramMap.get('id');
      this.customerservice.getAll().subscribe(c => {
        this.customer = c;
      });
      console.log('soid ' + this.soid);
  }


  update(item) {
    // alert('test save function');
      alert('Sales order will be updated');

      console.log('coy ' + item.Company);

      const date = new Date();

      const sodata = {
        SalesOrderID: this.soid,
        Customer: item.Customer,
        TaxAmt: item.TaxAmt, // orderHeader.soTaxAmt,
        Freight: item.Freight, // orderHeader.soFreight,
        Comment: item.Comment, // orderHeader.soComment,
        OrderDate: date,
        ModifiedDate: date
      };
      console.log(sodata);
      this.salesreportservice.update(this.soid, sodata)
      .subscribe();
        // console.log('update so' + this.orderHeader.SalesOrderID)
    }

  print(id) {
    this.router.navigate(['/print-form/', id]);
  }

  filter(query: string) {
    const filteredCustomers = (query) ?
      this.customer.filter(c => c.CompanyName.toLowerCase().includes(query.toLowerCase())) :
      this.customer;

  }

    getSalesReport() {
    }

     ngOnInit() {
      this.salesreportservice.getfSO(this.soid).take(1).subscribe(p => {
        this.orderHeader = p;
        console.log(this.orderHeader);
      });
    }

    ngOnDestroy() {
      // this.subscription.unsubscribe();
    }
}




