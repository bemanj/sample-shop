import { Product } from '../../../shared/models/product';
import { AngularFireDatabase } from 'angularfire2/database';
import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { OrderService } from '../../../shared/services/order.service';
import { PrintService } from './../../../shared/services/print.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import 'rxjs/add/operator/take'; 
import 'rxjs/add/operator/do'; 
import 'rxjs/add/operator/map'; 
import { Subscription } from 'rxjs/Subscription';
import { AngularPrint } from 'angular-print';

@Component({
  selector: 'print-form',
  templateUrl: './print-form.component.html',
  styleUrls: ['./print-form.component.css']
})
export class PrintFormComponent implements OnInit, OnDestroy {
  order = {
    shipping: {},
    items: {}
  };

  orderItems;
  someThis;
  id;
  subscription: Subscription;

  constructor(
  private db : AngularFireDatabase,
  private router: Router, 
  private route: ActivatedRoute,
  private printService: PrintService,
  private orderService: OrderService) {

    // this.id = this.route.snapshot.paramMap.get('id');
    // this.order = orderService.getOrdersByOrderId(this.id);

    this.id = this.route.snapshot.paramMap.get('id') 
    if (this.id) this.printService.get(this.id).take(1).subscribe(o => this.order = o);
    // if (this.id) this.printService.getItems(this.id);//.subscribe(o => this.orderItems = o);
    this.orderItems = this.getItems1(this.id);
    console.log(this.orderItems.title);
  }

  getItems1 (id){
    let item;
     return this.db.list('/orders/'+ id + '/items/').subscribe(orders => item = orders);
  }

  print(printSectionId): void {
    let printContents, popupWin;
    printContents = document.getElementById(printSectionId).innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <style>
          .invoice-box {
              max-width: 800px;
              margin: auto;
              padding: 30px;
              border: 1px solid #eee;
              box-shadow: 0 0 10px rgba(0, 0, 0, .15);
              font-size: 16px;
              line-height: 24px;
              font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
              color: #555;
          }
          
          .invoice-box table {
              width: 100%;
              line-height: inherit;
              text-align: left;
          }
          
          .invoice-box table td {
              padding: 5px;
              vertical-align: top;
          }
          
          .invoice-box table tr td:nth-child(2) {
              text-align: right;
          }
          
          .invoice-box table tr.top table td {
              padding-bottom: 20px;
          }
          
          .invoice-box table tr.top table td.title {
              font-size: 45px;
              line-height: 45px;
              color: #333;
          }
          
          .invoice-box table tr.information table td {
              padding-bottom: 40px;
          }
          
          .invoice-box table tr.heading td {
              background: #eee;
              border-bottom: 1px solid #ddd;
              font-weight: bold;
          }
          
          .invoice-box table tr.details td {
              padding-bottom: 20px;
          }
          
          .invoice-box table tr.item td{
              border-bottom: 1px solid #eee;
          }
          
          .invoice-box table tr.item.last td {
              border-bottom: none;
          }
          
          .invoice-box table tr.total td:nth-child(2) {
              border-top: 2px solid #eee;
              font-weight: bold;
          }
          
          @media only screen and (max-width: 600px) {
              .invoice-box table tr.top table td {
                  width: 100%;
                  display: block;
                  text-align: center;
              }
              
              .invoice-box table tr.information table td {
                  width: 100%;
                  display: block;
                  text-align: center;
              }
          }
          
          /** RTL **/
          .rtl {
              direction: rtl;
              font-family: Tahoma, 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
          }
          
          .rtl table {
              text-align: right;
          }
          
          .rtl table tr td:nth-child(2) {
              text-align: left;
          }
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}
   
    </body>
    
      </html>`
    );
    popupWin.document.close();
  }

  // getItems1 (id){
  //   return this.db.list('/orders/'+ id + '/items/')
  //         .subscribe(orders => {
  //           this.orders = orders;
  //           console.log(this.orders);
  //         });
  // }

  // getItems2 (){
  //   return this.db.list('/orders').map((items) => {
  //     return items.map(item => {
  //       item.metadata = this.db.object('/items/' + item.$key + '/product/');
  //       return item;
  //     });
  //   })
  // }


  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
  ngOnInit() {
  }

}
