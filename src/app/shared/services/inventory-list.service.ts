import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class InventoryListService {

  private _url = 'http://localhost:57483/api/'

  constructor(private http: Http) { }

  // create(product) { 
  //   return this.db.list('/products').push(product);
  // }

  getAll() { 
    // console.log(this.http.get(this.url + 'category1'));
  return this.http.get(this._url + 'inventorystocks')
   .do(this.logResponse)
   .map((res: Response) => res.json());
  }

  private logResponse(res: Response) {
    console.log(res);
  }

  get(inventoryId) { 
    return this.http.get(this._url + 'inventorystocks/' + inventoryId)
    .do(this.logResponse)
    .map((res: Response) => res.json());
 
  }

  // update(productId, product) { 
  //   return this.db.object('/products/' + productId).update(product);
  // }

  // delete(productId) { 
  //   return this.db.object('/products/' + productId).remove();
  // }
}
