import { SalesOrder } from './../../../shared/models/sales-order';
import { ActivatedRoute, Router } from '@angular/router';
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
  btn = 'New';
  soNumber$ = '';
  data = '';
  postStatus : any;
  salesReport: SalesReport[];
  subscription: Subscription;
  tableResource: DataTableResource<SalesReport>;
  items: SalesReport[] = [];
  itemCount: number;
  sonumber;
  salesorder;
  soid;
  
  master;

  // @Input('category') category;

  constructor(private categorypostservice: CategoryPostService, 
    private salesreportservice : SalesReportService,
    private router: Router, 
    private route: ActivatedRoute) { 
      this.salesorder = new SalesOrder();
  } 


  save() {
    
    // alert('test save function');
    if(this.btn == 'CANCEL SO')
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
      this.salesreportservice.create(sodata).subscribe(data => {
        this.salesorder = data,
        console.log(this.salesorder.SalesOrderID)
        this.router.navigate(['/sales-order/', this.salesorder.SalesOrderID]);
        });
      this.btn = 'CANCEL SO';
      
      
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




