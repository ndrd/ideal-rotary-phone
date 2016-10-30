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
import { NavController, ViewController, LoadingController } from 'ionic-angular';
/*
  Generated class for the Incomings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var Incomings = (function () {
    function Incomings(navCtrl, viewCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.generated = false;
        this.amount = '';
        this.qrGenerator = {};
        console.log(QRCode);
        this.loader = this.loadingCtrl.create({
            content: "Generando peticion..",
            duration: 1000
        });
    }
    Incomings.prototype.ionViewDidLoad = function () {
        console.log('Hello Incomings Page');
    };
    Incomings.prototype.generateRequest = function () {
        this.loader.present();
        console.log('generating');
        this.qrGenerator = new QRCode("qrCode", {
            text: this.getSignedPetition(),
            width: 128,
            height: 128,
            colorDark: "#006cbf",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
        this.generated = true;
    };
    Incomings.prototype.cancelRequest = function () {
        this.loader.close();
        this.qrGenerator.clear();
        this.generated = false;
    };
    Incomings.prototype.getSignedPetition = function () {
        return this.amount;
    };
    Incomings.prototype.dismiss = function (data) {
        this.viewCtrl.dismiss(data);
    };
    Incomings = __decorate([
        Component({
            selector: 'page-incomings',
            templateUrl: 'incomings.html'
        }), 
        __metadata('design:paramtypes', [NavController, ViewController, LoadingController])
    ], Incomings);
    return Incomings;
}());
