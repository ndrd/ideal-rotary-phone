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
import { NavController, ViewController } from 'ionic-angular';
import { UserData } from '../../providers/user-data';
import { CardIO } from 'ionic-native';
export var CardReader = (function () {
    function CardReader(navCtrl, userData, viewCtrl) {
        this.navCtrl = navCtrl;
        this.userData = userData;
        this.viewCtrl = viewCtrl;
        this.creditCard = {};
        this.bankAccount = {};
        this.submitted = false;
    }
    CardReader.prototype.onSignup = function (form) {
        this.submitted = true;
    };
    CardReader.prototype.processData = function (data) {
        this.creditCard.cardNumber = data.card_number;
        this.creditCard.number = data.card_number;
        this.creditCard.ccv = data.ccv;
        this.creditCard.until = data.expiry_month + '-' + data.expiry_year;
    };
    CardReader.prototype.startScanner = function () {
        var _this = this;
        console.log('start scanner');
        CardIO.canScan()
            .then(function (res) {
            if (res) {
                var options = {
                    requireExpiry: true,
                    requireCCV: true,
                    requirePostalCode: false,
                    hideLogo: true
                };
                CardIO.scan(options).then(function (data) {
                    _this.processData(_this.response);
                });
            }
        });
    };
    CardReader.prototype.save = function (data, type) {
        console.log('save', data);
        this.dismiss({
            data: data,
            type: type
        });
    };
    CardReader.prototype.dismiss = function (data) {
        this.viewCtrl.dismiss(data);
    };
    CardReader = __decorate([
        Component({
            selector: 'page-utils',
            templateUrl: 'utils.html'
        }), 
        __metadata('design:paramtypes', [NavController, UserData, ViewController])
    ], CardReader);
    return CardReader;
}());
