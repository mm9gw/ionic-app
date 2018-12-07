import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  public item:any;
  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

  getRemoteData(){
	  return this.http.get('https://sheetsu.com/apis/v1.0su/7ab97bd3721d');
  }

}
