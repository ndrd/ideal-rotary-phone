import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { UserData } from '../../providers/user-data';


@Component({
  selector: 'page-utils',
  templateUrl: 'utils.html'
})
export class CardReader {
  creditCard: {ccv?: string, cardNumber?: string, until? : string} = {};
  bannkAccount: { clabe? : string} = {};
  submitted = false;

  constructor(public navCtrl: NavController, public userData: UserData) {}

  onSignup(form) {
    this.submitted = true;

  }
}
