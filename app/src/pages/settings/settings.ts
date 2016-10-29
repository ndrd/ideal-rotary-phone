import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { UserData } from '../../providers/user-data';
import { CardReader } from '../utils/utils';

/*
  Generated class for the Settings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

declare var qrCode: any;

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class Settings {
  private user : any; 
  constructor(public navCtrl: NavController,
  			      public userData: UserData,
              public modalCtrl : ModalController) {
    
    this.user = {
      phone : '',
      cards : [],
      _id : '',
      name : '',
      accounts : [],
      paymentAccounts : [],
      depositAccounts : [],
      defaultPaymentMethod : '',

    };

    this.userData.loadUser().then( user => {
      console.log(user);
      this.user =  user;
      console.log(this.user);
    });
  }

  getNumber(cardNumber : string) : string {
    let blanks = '**** **** **** ';
    return blanks  + cardNumber.substring(cardNumber.length-4, cardNumber.length-1);
  }

  editCard( card :  any ) {

  }

  deleteCard( card : any ) {

  }
 
  addPayment() {
    let modal = this.modalCtrl.create(CardReader, this.user);
    modal.present();

    modal.onDidDismiss((data: any[]) => {
      if (data) {
        console.log(data);
      }
    });
  }

  ionViewDidLoad() {

    console.log('Hello Settings Page');
  }

}
