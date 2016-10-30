import { Component } from '@angular/core';
import { NavController, ViewController} from 'ionic-angular';
import {BarcodeScanner, Dialogs} from 'ionic-native';
import { PinDialog } from 'ionic-native';

/*
  Generated class for the Payments page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-payments',
  templateUrl: 'payments.html'
})
export class Payments {

	public data : any;
  public amount : number;

  constructor(public navCtrl: NavController,
  				public viewCtrl: ViewController
  				) {
  	this.data = {
  		from : '',
  		verified : true
  	}
  }

  ionViewDidLoad() {
    console.log('Hello Payments Page');
    BarcodeScanner.scan().then((barcodeData) => {
     	this.data =  barcodeData.text;
    }, (err) => {
        // An error occurred
    });

  }

  authorizationIntent() {
    Dialogs.prompt('Ingresa tu contraseña para verificar', 'Autorizar pago')
        .then( res => {
          console.log(res);
          this.dismiss({});
        }).catch( err => {

        });
    // PinDialog.prompt('Enter your PIN', 'Verify PIN', ['OK', 'Cancel'])
    //   .then(
    //     (result: any) => {
    //       if (result.buttonIndex == 1) console.log('User clicked OK, value is: ', result.input1);
    //       else if(result.buttonIndex == 2) console.log('User cancelled');
    //     }
    //   );
  }



  dismiss(data?: any) {
    this.viewCtrl.dismiss(data);
  }
}
