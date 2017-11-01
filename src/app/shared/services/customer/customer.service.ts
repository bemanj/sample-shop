import { ConfigService } from './../config/config.service';
import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class CustomerService {

  private _url: string;

  constructor(private http: Http, private configService: ConfigService) {
    this._url = configService.getApiURI();
  }

  create(body) {
    return this.http.post(this._url + 'CustomerLists', body)
    .do(this.logResponse)
    .map((res: Response) => res.json());
  }

  getAll() {
  return this.http.get(this._url + 'CustomerLists')
   .do(this.logResponse)
   .map((res: Response) => res.json());
  }

  private logResponse(res: Response) {
    console.log(res);
  }

  delete(pid) {
    this.http.delete(this._url + 'CustomerLists/' + pid)
    .subscribe((res: Response) => res.json());
  }

}
