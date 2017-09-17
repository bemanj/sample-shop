import { OrderByOptions } from 'angularfire2/interfaces';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryPostService {

  private url = 'http://localhost:57483/api/'
  private name;
  
  constructor(private http: Http) { }
  getAll() { 
        this.http.get(this.url + 'category1')
        .subscribe((res: any) => console.log('Got object', res));
     return this.http.get(this.url + 'category1');
  }
}
