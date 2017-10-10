import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class InventoryListService {

  //'http://localhost/MNMSolutions.Web.Api/api/'
  //'http://localhost:57483/api/'
  private _url = 'http://localhost/MNMSolutions.Web.Api/api/' //64770 //57483

  constructor(private http: Http) { }

  create(body) { 
    console.log(body);
    return this.http.post(this._url + 'inventorystocks', body)
    .do(this.logResponse)
    .map((res: Response) => res.json());
  }

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

  update(inventoryId, inventory) { 
    this.http.put(this._url + 'inventorystocks/' + inventoryId,inventory)
    .subscribe((res: Response) => res.json());;
  }

  delete(inventoryId) { 
    this.http.delete(this._url + 'inventorystocks/' + inventoryId)
    .do(this.logResponse)
    .subscribe((res: Response) => res.json());;
  }
}
