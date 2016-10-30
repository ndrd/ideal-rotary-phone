var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { UserData } from '../../providers/user-data';
import { CardReader } from '../utils/utils';
export var Settings = (function () {
    function Settings(navCtrl, userData, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.userData = userData;
        this.modalCtrl = modalCtrl;
        this.user = {
            phone: '',
            cards: [],
            _id: '',
            name: '',
            accounts: [],
            paymentAccounts: [],
            depositAccounts: [],
            defaultPaymentMethod: '',
            defaultDepositMethod: ''
        };
        this.userData.loadUser().then(function (user) {
            console.log(user);
            _this.user = user;
            console.log(_this.user);
        });
    }
    Settings.prototype.getNumber = function (cardNumber) {
        var blanks = '**** **** **** ';
        return blanks + cardNumber.substring(cardNumber.length - 4, cardNumber.length - 1);
    };
    Settings.prototype.editCard = function (card) {
    };
    Settings.prototype.deleteCard = function (card) {
    };
    Settings.prototype.addPayment = function () {
        var modal = this.modalCtrl.create(CardReader, this.user);
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data) {
                console.log(data);
            }
        });
    };
    Settings.prototype.ionViewDidLoad = function () {
        console.log('Hello Settings Page');
    };
    Settings = __decorate([
        Component({
            selector: 'page-settings',
            templateUrl: 'settings.html'
        }), 
        __metadata('design:paramtypes', [NavController, UserData, ModalController])
    ], Settings);
    return Settings;
}());
