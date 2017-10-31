import { ConfigService } from './../config/config.service';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


@Injectable()
export class CategoryPostService {

  private _url: string;
  private name;
  
  constructor(private http: Http, private configService: ConfigService) { 
    this._url = configService.getApiURI();
  }
  getAll() { 
        // console.log(this.http.get(this.url + 'category1'));
     return this.http.get(this._url + 'category1')
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

  private extractData(res: Response) {
    // return ((res: Response) => console.log(res.json()));
  }
}
