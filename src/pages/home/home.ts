import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public alertCtrl: AlertController, public dataProvider: DataProvider, public storage: Storage) {
  }

  public clicked = false;
  public day = '';
  showAlert() {
    let rand = (Math.floor(Math.random()*15));
    let today = new Date();
    let d = today.getDate();
    let m = today.getMonth()+1; //January is 0!
    let y = today.getFullYear();

    let todayString = m+'/'+d+'/'+y;
    //this.storage.set('dateString', todayString);

    
    this.storage.get('day').then((val) => {
      if(val!=todayString){
        this.dataProvider.getRemoteData().subscribe(result => {
      	  this.clicked=true;
          //this.day=val;
          this.storage.set('day',todayString);
          console.log('The date is', val);
  		    this.dataProvider.item=result[rand].messages;
          this.storage.set('number',rand);
          console.log(result);
        });
      }
      else{
        this.dataProvider.getRemoteData().subscribe(result => {
          this.clicked=true;
          this.storage.get('number').then((num) =>{
            this.dataProvider.item=result[num].messages;
          });
        });
        const alert = this.alertCtrl.create({
          title: 'Alert!',
          subTitle: 'You have already generated the message for today',
          buttons: ['OK']
        });
        alert.present();
      }
    });

    //alert.present();
  }

}