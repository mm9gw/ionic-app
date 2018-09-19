import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

  getRemoteData(){
	this.http.get('https://sheetsu.com/apis/v1.0su/7ab97bd3721d').subscribe(result => {
    	console.log(result);
    });
  }

}
