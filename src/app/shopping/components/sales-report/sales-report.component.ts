import { SalesReportService } from './../../../shared/services/sales-report.service';
import { CategoryPostService } from './../../../shared/services/category-post.service';
import { Component, OnInit, Input, NgModule } from '@angular/core';

@Component({
  selector: 'sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})
export class SalesReportComponent implements OnInit  {
  categories$;
  orderHeader = {};
  data = '';
  postStatus : any;

  // @Input('category') category;

  constructor(private categorypostservice: CategoryPostService, 
    private salesreportservice : SalesReportService) { 
    this.getCategories();
  } 

  getCategories() {
    this.categorypostservice.getAll().subscribe(data => this.categories$ = data);
  }

  save(orderHeader) {
    var date = new Date();
    var data = {
      //SalesOrderID: 1
      OrderDate: date,
      //, OnlineOrderFlag: true
      //, SalesOrderNumber: 'SO1'
      SubTotal: orderHeader.soSubTotal,
      TaxAmt: orderHeader.soTaxAmt,
      Freight: orderHeader.soFreight,
      //TotalDue: soTotalDue,
      Comment: orderHeader.soComment,
      ModifiedDate: date
    }
console.log(date);
    this.salesreportservice.create(data);
    // .subscribe(status => {
    //   this.postStatus = status;
    //  });
    //  console.log(this.postStatus);

  }


     ngOnInit() {
    }
}
