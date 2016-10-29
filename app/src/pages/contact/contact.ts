import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
	private searchString : string;
  constructor(public navCtrl: NavController) {
  	this.searchString = '';
  }

  private searchContacts($event) {

  }
}
