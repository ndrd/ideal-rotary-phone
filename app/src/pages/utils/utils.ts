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
  bankAccount: { clabe? : string} = {};
  submitted = false;
  response : any;

  constructor(public navCtrl: NavController, 
              public userData: UserData,
              public viewCtrl: ViewController) {}

  onSignup(form) {
    this.submitted = true;
  }

  processData(data : any) {
    this.creditCard.cardNumber = data.card_number;
    this.creditCard.number = data.card_number;
    this.creditCard.ccv = data.ccv;
    this.creditCard.until = data.expiry_month + '-' + data.expiry_year;
  }

  startScanner()  {
     console.log('start scanner');
     CardIO.canScan()
       .then(
         (res: boolean) => {
           if(res){
             let options = {
               requireExpiry: true,
               requireCCV: true,
               requirePostalCode: false,
               hideLogo : true
             };
             CardIO.scan(options).then( data => {
               this.processData(this.response);
             } );
           }
         }
       );
  }

  save(data : any, type : string) {
    console.log('save', data);
    this.dismiss({
      data :  data,
      type : type
    });
  }

  dismiss(data?: any) {
    this.viewCtrl.dismiss(data);
  }
}
