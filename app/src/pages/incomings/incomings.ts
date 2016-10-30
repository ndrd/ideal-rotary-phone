import { Component } from '@angular/core';
import { NavController, ViewController, LoadingController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController,
  			public viewCtrl: ViewController,
        public loadingCtrl: LoadingController
  	) {
    console.log(QRCode);
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
    console.log('generating')
    this.qrGenerator = new QRCode("qrCode", {
        text: this.getSignedPetition(),
        width: 128,
        height: 128,
        colorDark : "#006cbf",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
    this.generated = true;
  }

  cancelRequest() {
    this.loader.close();
    this.qrGenerator.clear();
    this.generated = false;
  }

  getSignedPetition() {
    return this.amount;
  }

  dismiss(data?: any) {
    this.viewCtrl.dismiss(data);
  }

}
