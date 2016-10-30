import { Component } from '@angular/core';
import { UserData } from '../../providers/user-data';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  public searchString : string;
  public contacts : any[];

  constructor(
  		public navCtrl: NavController,
  		public userData : UserData) {
  	this.searchString = '';
  	this.userData.getContacts({}).then( contacts => {
  		this.contacts = <any[]> contacts;
  	})
  }

  searchContacts() {

  }
}
