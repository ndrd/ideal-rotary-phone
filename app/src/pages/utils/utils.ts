import { Component } from '@angular/core';

import { NavController, ViewController} from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { UserData } from '../../providers/user-data';
import { CardIO } from 'ionic-native';

@Component({
  selector: 'page-utils',
  templateUrl: 'utils.html'
})
export class CardReader {
  creditCard: {ccv?: string, cardNumber?: string, until? : string, number? : string} = {};
  bannkAccount: { clabe? : string} = {};
  submitted = false;

  constructor(public navCtrl: NavController, 
              public userData: UserData,
              public viewCtrl: ViewController) {}

  onSignup(form) {
    this.submitted = true;
  }

  startScanner()  {
     console.log('start scanner');
     CardIO.canScan()
       .then(
         (res: boolean) => {
           if(res){
             let options = {
               requireExpiry: true,
               requireCCV: false,
               requirePostalCode: false
             };
             CardIO.scan(options).then( data => {
               alert(data);
             } );
           }
         }
       );
  }

  dismiss(data?: any) {
    this.viewCtrl.dismiss(data);
  }
}
