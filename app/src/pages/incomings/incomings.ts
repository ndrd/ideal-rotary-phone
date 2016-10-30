import { Component } from '@angular/core';
import { NavController, ViewController, LoadingController } from 'ionic-angular';
import { Dialogs, LocalNotifications } from 'ionic-native';
import { UserData } from '../../providers/user-data';
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
        public loadingCtrl: LoadingController,
        public userData : UserData  	
      ) {

    this.loader = this.loadingCtrl.create({
      content: "Generando peticion..",
    });

  }


  ionViewDidLoad() {
    console.log('Hello Incomings Page');
  }

  generateRequest() {
    this.loader.present();
    
    let request = {

    };

    this.userData.signPayment(request).then( res => {
    this.time = 100;

    this.qrGenerator = new QRCode("qrCode", {
       text: <any> res['_id'],
       width: 128,
       height: 128,
       colorDark : "#006cbf",
       colorLight : "#ffffff",
       correctLevel : QRCode.CorrectLevel.H
    });

    this.loader.dismiss();
    this.generated = true;

    let weirdID = setInterval( () => {
      let resolved = false;
     this.time--;
     if (this.time % 3 == 0) {
       this.userData.hasPayed(res['_id'])
        .then( res => {
            resolved = true;
            LocalNotifications.schedule({
               text: 'Se ha realizado la transferencia a tu cuenta',
               at: new Date(new Date().getTime() + 5),
               led: 'FF0000',
               icon : 'http://jea.solutions/images/icon.png'
            });
        }).catch( error => {

        });
     }
     if (this.time == 0 || resolved) {
       clearInterval(weirdID);
       this.time  = 100;
       if (resolved) {
         this.dismiss({success : true});
       } else {
         this.dismiss();
       }
     }
    }, 1000);

    }).catch( error => {
      this.loader.dismiss();
      Dialogs.alert('Verifica tu conexión a internet', 'Oh Oh ...', 'Ok')
    });

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
