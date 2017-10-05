import { Subscription } from 'rxjs/Subscription';
import { SalesReport } from './../../../shared/models/sales-report';
import { DataTableResource } from 'angular-4-data-table';

import { SalesReportService } from './../../../shared/services/sales-report.service';
import { CategoryPostService } from './../../../shared/services/category-post.service';
import { Component, OnInit, Input, NgModule } from '@angular/core';

@Component({
  selector: 'sales-order',
  templateUrl: './sales-order.component.html',
  styleUrls: ['./sales-order.component.css']
})
export class SalesOrderComponent implements OnInit {
  categories$;
  orderHeader = {};
  btn = 'New Sales Order';
  soNumber$;
  data = '';
  postStatus : any;
  salesReport: SalesReport[];
  subscription: Subscription;
  tableResource: DataTableResource<SalesReport>;
  items: SalesReport[] = [];
  itemCount: number;

  // @Input('category') category;

  constructor(private categorypostservice: CategoryPostService, 
    private salesreportservice : SalesReportService) { 
  } 

  // this.getCategories();
  // this.subscription = this.salesreportservice.getAllSO()
  // .subscribe(salesReport => {
  //   this.salesReport = salesReport;
  //   this.initializeTable(salesReport);
  // });

  // private initializeTable(sales: SalesReport[]) {
  //   this.tableResource = new DataTableResource(sales);
  //   this.tableResource.query({ offset: 0 })
  //     .then(items => this.items = items);
  //   this.tableResource.count()
  //     .then(count => this.itemCount = count);
  // }

  // reloadItems(params) {
  //   if (!this.tableResource) return;

  //   this.tableResource.query(params)
  //     .then(items => this.items = items);    
  // }

  // filter(query: string) { 
  //   let filteredSales = (query) ?
  //     this.salesReport.filter(p => p.salesOrderNumber..includes(query)) :
  //     this.salesReport;

  //   this.initializeTable(filteredSales);
  // }

  // getCategories() {
  //   this.categorypostservice.getAll().subscribe(data => this.categories$ = data);
  // }

  save() {
    // alert('test save function');
    if(this.btn == 'CANCEL Sales Order')
    {
        alert('Are you sure?');
    } else {
      var date = new Date();
      var sodata = {
        //SalesOrderID: 1
        OrderDate: date,
        //, OnlineOrderFlag: true
        //, SalesOrderNumber: 'SO1'
        SubTotal: 0,//orderHeader.soSubTotal,
        TaxAmt: 0,//orderHeader.soTaxAmt,
        Freight: 0,//orderHeader.soFreight,
        //TotalDue: soTotalDue,
        Comment: 'test',//orderHeader.soComment,
        ModifiedDate: date
      }
      console.log(sodata);
      this.salesreportservice.create(sodata).subscribe(data => this.soNumber$ = data.SalesOrderNumber);
      //this.btn = 'CANCEL Sales Order';
       console.log(this.soNumber$);
    }
  
  } 

    getSalesReport() {
      
    }

     ngOnInit() {
    }

    ngOnDestroy(){
      // this.subscription.unsubscribe();
    }
}




