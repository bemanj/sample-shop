import { query } from '@angular/animations';
import { OrderByOptions } from 'angularfire2/interfaces';
import { ShoppingCart } from '../models/shopping-cart';
import { Product } from './../models/product';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class PrintService {
yourData;

  constructor(private db: AngularFireDatabase) { 
  }

  get(orderId) { 
      return this.db.object('/orders/' + orderId);
  }

  getItems1 (){
    return this.db.list('/orders').map((items) => {
      return items.map(item => {
        item.metadata = this.db.object('/items/' + item.$key + '/product/');
        return item;
      });
    })
  }

  getItems(orderId) {
    this.yourData = this.db.list('/orders/' + orderId + '/items/', {
                  query:{
                    orderByKey :true
                  }
                })
    .map((itemKeys) => {
      return  itemKeys.map(key => {
        key.data = this.db.list(`/orders/' + orderId + '/items/${key.id}/product/`);
           return  key;
       })
      });

  // console.log(this.yourData);
  }

  // getItems(orderId) { 
  //   return this.db.object('/orders/' + orderId + '/items/', {
  //                 query:{
  //                   or
  //                 }
  //   });
  // }

  // async getCart(): Promise<Observable<ShoppingCart>> {
  //   let cartId = await this.getOrCreateCartId();
  //   return this.db.object('/shopping-carts/' + cartId)
  //     .map(x => new ShoppingCart(x.items));
  // }


}
