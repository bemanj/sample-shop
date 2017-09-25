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
