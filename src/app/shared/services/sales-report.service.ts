import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class SalesReportService {

  private _url = 'http://localhost:57483/api/'
  private name;

  constructor(private http: Http) { }

  create(body) {
    // console.log(body);
        return this.http.post(this._url + 'SalesOrderHeaders/', body)
        .do(this.logResponse)
        .map((res: Response) => res.json());
      }
  
  // sales orders
  getAllSO() { 
         return this.http.get(this._url + 'SalesOrderHeaders/')
        .do(this.logResponse)
        .map((res: Response) => res.json());
  }

  getAllTotalSales() { 
    return this.http.get(this._url + 'SalesReport/')
   .do(this.logResponse)
   .map((res: Response) => res.json());
  }

  private logResponse(res: Response) {
    console.log(res);
  }

  private extractData(res: Response) {
    return (res: Response) => res.json();
  }

}
