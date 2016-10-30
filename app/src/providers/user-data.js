var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
export var UserData = (function () {
    function UserData(events, storage, http) {
        this.events = events;
        this.storage = storage;
        this.http = http;
        this._favorites = [];
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        this.server = 'https://api-qr-pay.herokuapp.com/api';
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
        this.cell = '55 22 83 78 04';
    }
    UserData.prototype.loadUser = function () {
        var _this = this;
        return new Promise(function (resolve) {
            // We're using Angular Http provider to request the data,
            // then on the response it'll map the JSON data to a parsed JS object.
            // Next we process the data and resolve the promise with the new data.
            _this.http.get('assets/data/user.json').subscribe(function (res) {
                // we've got back the raw data, now generate the core schedule data
                // and save the data for later reference
                _this.user = (res.json());
                resolve(_this.user);
            });
        });
    };
    UserData.prototype.hasFavorite = function (sessionName) {
        return (this._favorites.indexOf(sessionName) > -1);
    };
    UserData.prototype.savePaymentMethod = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.server + '/users/' + _this.user._id, data).subscribe(function (res) {
                var user = res.json();
                _this.user = user;
                resolve(user);
            });
        });
    };
    UserData.prototype.deletePaymentMethod = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.server + '/users/' + _this.user._id + '/payments/' + id, {}).subscribe(function (res) {
                var user = res.json();
                _this.user = user;
                resolve(user);
            });
        });
    };
    UserData.prototype.requestPaymentTo = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.server + '/payment_request/' + _this.user._id, data).subscribe(function (res) {
                var user = res.json();
                _this.user = user;
                resolve(user);
            });
        });
    };
    UserData.prototype.sendPaymentTo = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.server + '/payment_request/' + _this.user._id, data).subscribe(function (res) {
                var user = res.json();
                _this.user = user;
                resolve(user);
            });
        });
    };
    UserData.prototype.getContacts = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            //let url = this.server + '/users/' + this.user._id + '/contacts';
            var url = 'assets/data/friends.json';
            _this.http.get(url, data).subscribe(function (res) {
                var user = res.json();
                _this.user = user;
                resolve(user);
            });
        });
    };
    UserData.prototype.getTransactions = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            //let  url = this.server + '/users/' + this.user._id;
            var url = 'assets/data/transa.json';
            _this.http.get(url, data).subscribe(function (res) {
                var user = res.json();
                _this.user = user;
                resolve(user);
            });
        });
    };
    UserData.prototype.getBalance = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.server + '/users/' + _this.user._id + '/balance', data).subscribe(function (res) {
                var user = res.json();
                _this.user = user;
                resolve(user);
            });
        });
    };
    UserData.prototype.addFavorite = function (sessionName) {
        this._favorites.push(sessionName);
    };
    UserData.prototype.removeFavorite = function (sessionName) {
        var index = this._favorites.indexOf(sessionName);
        if (index > -1) {
            this._favorites.splice(index, 1);
        }
    };
    UserData.prototype.login = function (username) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.events.publish('user:login');
    };
    UserData.prototype.signup = function (username) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.events.publish('user:signup');
    };
    UserData.prototype.logout = function () {
        this.storage.remove(this.HAS_LOGGED_IN);
        this.storage.remove('username');
        this.events.publish('user:logout');
    };
    UserData.prototype.setUsername = function (username) {
        this.storage.set('username', username);
    };
    UserData.prototype.getUsername = function () {
        return this.storage.get('username').then(function (value) {
            return value;
        });
    };
    // return a promise
    UserData.prototype.hasLoggedIn = function () {
        return this.storage.get(this.HAS_LOGGED_IN).then(function (value) {
            return value === true;
        });
    };
    UserData = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Events, Storage, Http])
    ], UserData);
    return UserData;
}());
