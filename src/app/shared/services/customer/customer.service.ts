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

  getAll() {
  return this.http.get(this._url + 'CustomerLists')
   .do(this.logResponse)
   .map((res: Response) => res.json());
  }

  private logResponse(res: Response) {
    console.log(res);
  }

}
