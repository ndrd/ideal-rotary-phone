import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UserData } from '../../providers/user-data';

/*
  Generated class for the Transactions page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-transactions',
  templateUrl: 'transactions.html'
})
export class Transactions {

  public transactions :  any [] = [];
  public queryTransactions : string = '';

  constructor(public navCtrl: NavController,
  			  public userData :  UserData) {
  	this.queryTransactions =  '';
  }

  ionViewDidLoad() {
    console.log('Hello Transactions Page');
    this.userData.getTransactions({}).then( res => {
    	this.transactions  = <any[]> res;
    	console.log(this.transactions);
    })
  }

  searchTransactions($event) {

  }

}
