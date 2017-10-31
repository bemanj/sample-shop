import { ConfigService } from './../config/config.service';
import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class InventoryListService {

  
  private _url: string;

  constructor(private http: Http, private configService: ConfigService) { 
    this._url = configService.getApiURI();
  }

  create(body) { 
    console.log(body);
    return this.http.post(this._url + 'inventorystocks', body)
    .do(this.logResponse)
    .map((res: Response) => res.json());
  }

  getAll() { 
    // console.log(this.http.get(this.url + 'category1'));
  return this.http.get(this._url + 'inventoryview')
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
