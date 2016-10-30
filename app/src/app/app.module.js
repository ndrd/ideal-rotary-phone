var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
import { Incomings } from '../pages/incomings/incomings';
import { TabsPage } from '../pages/tabs/tabs';
import { UserData } from '../providers/user-data';
import { Storage } from '@ionic/storage';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
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
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
