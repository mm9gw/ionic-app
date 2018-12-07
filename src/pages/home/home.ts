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
  public day;
  showAlert() {
    let rand = (Math.floor(Math.random()*15));
    let today = new Date();
    let d = today.getDate();
    let m = today.getMonth()+1; //January is 0!
    let y = today.getFullYear();
    today = m+'/'+d+'/'+y;

    if(this.day!=today){
      this.dataProvider.getRemoteData().subscribe(result => {
      	this.clicked=true;
        this.day=today;
  		  this.dataProvider.item=result[rand].messages;
      	console.log(result);
      });
    }
    else{
      const alert = this.alertCtrl.create({
        title: 'Alert!',
        subTitle: 'You have already generated the message for today',
        buttons: ['OK']
      });
      alert.present();
    }

    //alert.present();
  }

}