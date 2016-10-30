import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController,
  			public viewCtrl: ViewController
  	) {}

  ionViewDidLoad() {
    console.log('Hello Incomings Page');
  }

  dismiss(data?: any) {
    this.viewCtrl.dismiss(data);
  }

}
