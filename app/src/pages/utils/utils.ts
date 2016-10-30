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
  response : { data? : any};
  data : { barcode_url? : string};
  hasReference : boolean =  false;
  barcodeImage :  string = '';
  barcode :  string = '';

  constructor(public navCtrl: NavController, 
              public userData: UserData,
              public viewCtrl: ViewController) {
    this.barcodeImage =  'http://s3.amazonaws.com/cash_payment_barcodes/38100000000042290121213001160013.png';
     this.barcode = '38100000000042290121213001160013';
  }

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

  generateReference() {
    this.hasReference = true;
    this.userData.requestOxxo(this.bankAccount)
      .then( res => {
        this.response = res;
        this.barcodeImage  = res['data']['barcode_url'];
        this.barcode  = res['data']['barcode'];
        this.hasReference = true;
      }).catch(error => {
        this.hasReference = false;
        console.log(error);
      })
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
