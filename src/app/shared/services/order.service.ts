import { forEach } from '@angular/router/src/utils/collection';
import { ShoppingCartService } from './shopping-cart.service';
// import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {
totalSales = 0 ;

  // constructor(private db: AngularFireDatabase, private shoppingCartService: ShoppingCartService) { 
  // }

  // async placeOrder(order) {
  //   let result = await this.db.list('/orders').push(order);
  //   this.shoppingCartService.clearCart();
  //   return result;
  // }

  // getOrders() {
  //   return this.db.list('/orders');
  // }

  // getSomething() {
  //   let item = 0;
  //   return this.db.list('/orders', { preserveSnapshot: true})
  //   .map(
  //     async res => {
  //       // do something here
  //       res.forEach(res => {
  //         return item += res.val()['grossAmount']
  //       });
  //     },
  //     err => {
  //           console.error(err);
  //     }
  //   );
  // }

  // getTotalSales()  {
  //   console.log ('test only ' + this.getSomething());
  //   return this.totalSales;
  // }

  // get(orderId) {
  //   return this.db.object('/orders/' + orderId);
  // }

  // getOrdersByOrderId(orderId: string) {
  //   return this.db.list('/orders', {
  //     query: {
  //       orderByKey: true,
  //       equalTo: orderId
  //     }
  //   });
  // }

  // getOrdersByUser(userId: string) {
  //   return this.db.list('/orders', {
  //     query: {
  //       orderByChild: 'userId',
  //       equalTo: userId
  //     }
  //   });
  // }
}
