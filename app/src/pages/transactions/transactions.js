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
import { NavController } from 'ionic-angular';
import { UserData } from '../../providers/user-data';
/*
  Generated class for the Transactions page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var Transactions = (function () {
    function Transactions(navCtrl, userData) {
        this.navCtrl = navCtrl;
        this.userData = userData;
        this.transactions = [];
        this.queryTransactions = '';
        this.queryTransactions = '';
    }
    Transactions.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('Hello Transactions Page');
        this.userData.getTransactions({}).then(function (res) {
            _this.transactions = res;
            console.log(_this.transactions);
        });
    };
    Transactions.prototype.searchTransactions = function () {
    };
    Transactions = __decorate([
        Component({
            selector: 'page-transactions',
            templateUrl: 'transactions.html'
        }), 
        __metadata('design:paramtypes', [NavController, UserData])
    ], Transactions);
    return Transactions;
}());
