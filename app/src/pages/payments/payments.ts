import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Payments Page');
  }

}
