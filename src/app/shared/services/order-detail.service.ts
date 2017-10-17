import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class OrderDetailService {

  // http://localhost/MNMSolutions.Web.Api
  // private _url = 'http://localhost:64770/api/' //64770 //57483
  private _url = 'http://localhost:64770/api/' //64770 //57483

  constructor(private http: Http) { }

  create(body) { 
    console.log(body);
    return this.http.post(this._url + 'SalesOrderDetails', body)
    .do(this.logResponse)
    .map((res: Response) => res.json());
  }

  getAll() { 
    // console.log(this.http.get(this.url + 'category1'));
  return this.http.get(this._url + 'view_SalesOrderDetails')
   .do(this.logResponse)
   .map((res: Response) => res.json());
  }

  private logResponse(res: Response) {
    console.log(res);
  }

  get(inventoryId) { 
    return this.http.get(this._url + 'InventoryView/' + inventoryId)
    .do(this.logResponse)
    .map((res: Response) => res.json());
  }

  update(inventoryId, inventory) { 
    this.http.put(this._url + 'SalesOrderDetails/' + inventoryId,inventory)
    .subscribe((res: Response) => res.json());;
  }

  delete(inventoryId) { 
    return this.http.delete(this._url + 'SalesOrderDetails/' + inventoryId)
    .do(this.logResponse)
    .map((res: Response) => res.json());;
  }
}
