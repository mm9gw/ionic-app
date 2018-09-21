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

  constructor(public alertCtrl: AlertController, public dataProvider: DataProvider) {
  }

  public clicked = false;
  showAlert() {
    let rand = (Math.floor(Math.random()*15));
    this.dataProvider.getRemoteData().subscribe(result => {
    	this.clicked=true;
		this.dataProvider.item=result[rand].messages;
    	console.log(result);
    	const alert = this.alertCtrl.create({
      	title: 'Alert!',
      	subTitle: this.dataProvider.item,
      	buttons: ['OK']
    	});
    	//alert.present();
    });

    //alert.present();
  }

}