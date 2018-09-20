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

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Alert!',
      subTitle: this.dataProvider.item,
      buttons: ['OK']
    });
    this.dataProvider.getRemoteData();

    //alert.present();
  }

}