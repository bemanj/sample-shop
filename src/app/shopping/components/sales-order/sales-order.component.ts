import { CategoryPostService } from './../../../shared/services/category-post.service';
import { SalesReportService } from './../../../shared/services/sales-service/sales-report.service';
import { SalesReport } from './../../../shared/models/sales-report';
import { SalesOrder } from './../../../shared/models/sales-order';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { DataTableResource } from 'angular-4-data-table';
import { Component, OnInit, Input, NgModule } from '@angular/core';

@Component({
  selector: 'sales-order',
  templateUrl: './sales-order.component.html',
  styleUrls: ['./sales-order.component.css']
})
export class SalesOrderComponent implements OnInit {
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
  soid;
  orderHeader = new SalesOrder();
  master;

  // @Input('category') category;

  constructor(private categorypostservice: CategoryPostService, 
    private salesreportservice : SalesReportService,
    private router: Router, 
    private route: ActivatedRoute) { 

      this.soid = this.route.snapshot.paramMap.get('id');

      this.salesreportservice.getSO(this.soid).subscribe(so => {
        this.orderHeader = so,
        console.log('so only' + so)
      });

      console.log('soid' + this.soid);
  } 


  update(item) {
    // alert('test save function');
      alert('Sales order will be updated');

      console.log('coy ' + item.Company);

      var date = new Date();

      var sodata = {
        SalesOrderID: this.soid,
        Customer: item.Customer,
        TaxAmt: item.soTax,//orderHeader.soTaxAmt,
        Freight: item.soFreight,//orderHeader.soFreight,
        Comment: item.soComment//orderHeader.soComment,
        // ModifiedDate: date
      }
      console.log(sodata);
      if (this.soid) 
      this.salesreportservice.update(this.soid, sodata)
      .subscribe(data => this.orderHeader = data);
        console.log('update so' + this.orderHeader.SalesOrderID)
    }
  

  print(item){
    // console.log('printing form');
    this.router.navigate(['/print-form/', item]);
  }

    getSalesReport() {
      
    }

     ngOnInit() {
       
    }

    ngOnDestroy(){
      // this.subscription.unsubscribe();
    }
}




