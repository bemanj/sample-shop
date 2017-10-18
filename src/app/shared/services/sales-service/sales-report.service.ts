import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class SalesReportService {

  private _url = 'http://localhost:64770/api/' //64770 //64770
  private name;

  constructor(private http: Http) { }

  create(body) {
    // console.log(body);
        return this.http.post(this._url + 'SalesOrderHeaders/', body)
        .do(this.logResponse)
        .map((res: Response) => res.json());
      }

  update(soid, sodata) { 
    return this.http.put(this._url + 'SalesOrderHeaders/' + soid, sodata)
    .do(this.logResponse)
    .map((res: Response) => res.json());
  }
  
  // sales orders
  getAllSO() { 
         return this.http.get(this._url + 'SalesOrderHeaders/')
        .do(this.logResponse)
        .map((res: Response) => res.json());
  }

  // sales orders
  getfSO(id) { 
    return this.http.get(this._url + 'SalesOrderHeaders/' + id)
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
