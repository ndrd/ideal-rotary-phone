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
import { UserData } from '../../providers/user-data';
import { NavController, ModalController } from 'ionic-angular';
import { Payments } from '../payments/payments';
import { Incomings } from '../incomings/incomings';
export var HomePage = (function () {
    function HomePage(navCtrl, modalCtrl, userData) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.userData = userData;
        userData.loadUser().then(function (user) {
            _this.user = user;
        });
    }
    HomePage.prototype.presentFilter = function () {
        //   let modal = this.modalCtrl.create(ScheduleFilterPage, this.excludeTracks);
        //   modal.present();
        //   modal.onDidDismiss((data: any[]) => {
        //     if (data) {
        //       this.excludeTracks = data;
        //       this.updateSchedule();
        //     }
        //   });
    };
    HomePage.prototype.showPaymentView = function () {
        console.log('another');
        var modal = this.modalCtrl.create(Payments, this.payment);
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data) {
                console.log(data);
            }
        });
    };
    HomePage.prototype.showIncomingView = function () {
        console.log('sssssss');
        var modal = this.modalCtrl.create(Incomings, this.incoming);
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data) {
                console.log(data);
            }
        });
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }), 
        __metadata('design:paramtypes', [NavController, ModalController, UserData])
    ], HomePage);
    return HomePage;
}());
