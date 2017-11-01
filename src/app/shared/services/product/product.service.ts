import { ConfigService } from './../config/config.service';
import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class ProductService {

  private _url: string;

  constructor(private http: Http, private configService: ConfigService) {
    this._url = configService.getApiURI();
  }

  create(body) {
    console.log(body);
    return this.http.post(this._url + 'ProductOnes', body)
    .do(this.logResponse)
    .map((res: Response) => res.json());
  }

  getAll() {
    // console.log(this.http.get(this.url + 'category1'));
  return this.http.get(this._url + 'ProductOnes')
   .do(this.logResponse)
   .map((res: Response) => res.json());
  }

  private logResponse(res: Response) {
    console.log(res);
  }

  getById(pid) {
    return this.http.get(this._url + 'ProductOnes/' + pid)
    .do(this.logResponse)
    .map((res: Response) => res.json());
  }

  delete(pid) {
    this.http.delete(this._url + 'ProductOnes/' + pid)
    .subscribe((res: Response) => res.json());
  }

  update(pid, pbody) {
    this.http.put(this._url + 'ProductOnes/' + pid, pbody)
    .subscribe((res: Response) => res.json());
  }

}
