import { Component } from '@angular/core';
import { NavController, ViewController, LoadingController } from 'ionic-angular';
import { Dialogs, LocalNotifications } from 'ionic-native';

declare var QRCode;

/*
  Generated class for the Incomings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-incomings',
  templateUrl: 'incomings.html'
})
export class Incomings {

  loader : any;
  generated : boolean = false;
  amount : string = '';
  qrGenerator  : any = {};
  time : number  = 60;

  constructor(public navCtrl: NavController,
  			public viewCtrl: ViewController,
        public loadingCtrl: LoadingController  	
      ) {

    this.loader = this.loadingCtrl.create({
      content: "Generando peticion..",
      duration: 1000
    });

  }


  ionViewDidLoad() {
    console.log('Hello Incomings Page');
  }

  generateRequest() {
    this.loader.present();
    console.log('generating');
    
    this.time = 100;

    LocalNotifications.schedule({
       text: 'Delayed Notification',
       at: new Date(new Date().getTime() + 500),
       led: 'FF0000',
       sound: null
    });

    this.qrGenerator = new QRCode("qrCode", {
        text: this.getSignedPetition(),
        width: 128,
        height: 128,
        colorDark : "#006cbf",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
    
    this.generated = true;

    let weirdID = setInterval( () => {
      this.time--;
      console.log('time', this.time);
      if (this.time == 0) {
        clearInterval(weirdID);
        this.time  = 100; 
      }
    }, 1000);
  }

  cancelRequest() {
    this.qrGenerator.clear();
    this.generated = false;
    this.dismiss();
  }

  getSignedPetition() {
    return this.amount;
  }

  dismiss(data?: any) {
    this.viewCtrl.dismiss(data);
  }

}
