import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductListService {

  private _url = 'http://localhost:57483/api/'

  constructor(private http: Http) { }

  // create(product) { 
  //   return this.db.list('/products').push(product);
  // }

  getAll() { 
    // console.log(this.http.get(this.url + 'category1'));
  return this.http.get(this._url + 'ProductOnes')
  .do(this.logResponse)
  .map((res: Response) => res.json());
  // .map((res: Response) => console.log(res.json()));
  // .map(this.extractData)
  // .do((res: Response) => console.log(res))
  // .map((res: Response) => res.json())
  }
  
  private logResponse(res: Response) {
    console.log(res);
  }

  // get(productId) { 
  //   return this.db.object('/products/' + productId);
  // }

  // update(productId, product) { 
  //   return this.db.object('/products/' + productId).update(product);
  // }

  // delete(productId) { 
  //   return this.db.object('/products/' + productId).remove();
  // }
}
