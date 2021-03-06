import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { Transactions } from '../transactions/transactions';
import { ContactPage } from '../contact/contact';
import { Settings } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = Transactions;
  tab3Root: any = ContactPage;
  tab4Root: any = Settings;

  constructor() {

  }
}
