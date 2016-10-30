import { Component } from '@angular/core';
import { NavController, ViewController} from 'ionic-angular';
import {BarcodeScanner} from 'ionic-native';


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



  dismiss(data?: any) {
    this.viewCtrl.dismiss(data);
  }
}
