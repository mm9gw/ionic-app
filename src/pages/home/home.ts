import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items:any;
  constructor(public alertCtrl: AlertController, public http: HttpClient) {
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Alert!',
      subTitle: this.items,
      buttons: ['OK']
    });
    this.getData();
    alert.present();
  }

  getData(){
  	let url = 'https://sheetsu.com/apis/v1.0su/7ab97bd3721d';
  	let data: Observable<any> = this.http.get(url);
  	let rand = (Math.floor(Math.random()*15));
  	data.subscribe(result => {
  		this.items=result[rand].messages;
  		console.log(result);
  	});
  }

}