import { ConfigService } from './../config/config.service';
import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class OrderDetailService {

  private _url: string;

  constructor(private http: Http, private configService: ConfigService) {
    this._url = configService.getApiURI();
  }

  create(body) {
    console.log(body);
    return this.http.post(this._url + 'SalesOrderDetails', body)
    .do(this.logResponse)
    .map((res: Response) => res.json());
  }

  // getAll() {
  //   // console.log(this.http.get(this.url + 'category1'));
  // return this.http.get(this._url + 'view_SalesOrderDetails')
  //  .do(this.logResponse)
  //  .map((res: Response) => res.json());
  // }

  private logResponse(res: Response) {
    console.log(res);
  }

  get(id) {
    return this.http.get(this._url + 'SalesOrderDetails/' + id)
    .do(this.logResponse)
    .map((res: Response) => res.json());
  }

  update(id, data) {
    this.http.put(this._url + 'SalesOrderDetails/' + id, data)
    .subscribe((res: Response) => res.json());
  }

  delete(inventoryId) {
    return this.http.delete(this._url + 'SalesOrderDetails/' + inventoryId)
    .do(this.logResponse)
    .map((res: Response) => res.json());
  }
}
