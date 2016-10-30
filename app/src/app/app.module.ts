import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { Settings } from '../pages/settings/settings';
import { CardReader } from '../pages/utils/utils';
import { Transactions } from '../pages/transactions/transactions';
import { Payments } from '../pages/payments/payments';
import { Incomings} from '../pages/incomings/incomings';
import { TabsPage } from '../pages/tabs/tabs';
import { UserData } from '../providers/user-data';
import { Storage } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    Settings,
    CardReader,
    Transactions,
    Payments,
    Incomings,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    Settings,
    CardReader,
    Transactions,
    Payments,
    Incomings,
    TabsPage
  ],
  providers: [UserData, Storage]
})
export class AppModule {}
