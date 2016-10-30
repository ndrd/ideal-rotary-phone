import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Injectable()
export class UserData {
  _favorites = [];
  cell : string;
  HAS_LOGGED_IN = 'hasLoggedIn';
  server = 'https://api-qr-pay.herokuapp.com/api';
  user : any = {
    phone : '',
    cards : [],
    _id : '',
    name : '',
    accounts : [],
    paymentAccounts : [],
    depositAccounts : [],
    defaultPaymentMethod : '',
    defaultDepositMethod : ''
  };

  constructor(public events: Events, 
             public storage: Storage,
             public http: Http) {
    this.cell = '55 22 83 78 04';
  }

  loadUser() {
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get('assets/data/user.json').subscribe(res => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference
        this.user = (res.json());
        resolve(this.user);
      });
    });
  }

  hasFavorite(sessionName) {
    return (this._favorites.indexOf(sessionName) > -1);
  }

  savePaymentMethod(data :  any) {
    return new Promise(resolve => {
        this.http.post(this.server + '/users/' + this.user._id, data).subscribe( res => {
          let user = res.json();
          this.user =  user;
          resolve(user);
        })
    })
  }

  deletePaymentMethod(id : string) {
    return new Promise(resolve => {
        this.http.post(this.server + '/users/' + this.user._id + '/payments/' + id, {} ).subscribe( res => {
          let user = res.json();
          this.user =  user;
          resolve(user);
        })
    })
  }

  requestPaymentTo(data : any) {
    return new Promise(resolve => {
        this.http.post(this.server + '/payment_request/' + this.user._id, data).subscribe( res => {
          let user = res.json();
          this.user =  user;
          resolve(user);
        })
    }) 
  }

  signPayment(data : any) {
    return new Promise(resolve => {
        this.http.post(this.server + '/payment_request/' + this.user._id, data).subscribe( res => {
          let data = res.json();
          resolve(data);
        })
    }) 
  }

  hasPayed(transaction_id : string) {
    return new Promise((resolve, reject) => {
        this.http.get(this.server + '/has_payed/' + transaction_id).subscribe( res => {
          let data = res.json();
          if (data.hasPayed) {
            resolve(data);
          }
          reject(data);
        });
    }) 
  }

  sendPaymentTo(data : any) {
    return new Promise(resolve => {
        this.http.post(this.server + '/payment_request/' + this.user._id, data).subscribe( res => {
          let user = res.json();
          this.user =  user;
          resolve(user);
        })
    })
  }

  getContacts(data : any) {
    return new Promise(resolve => {
        //let url = this.server + '/users/' + this.user._id + '/contacts';
        let url =  'assets/data/friends.json'
        this.http.get(url, data).subscribe( res => {
          let user = res.json();
          this.user =  user;
          resolve(user);
        })
    })
  }

  getTransactions(data :  any) {
    return new Promise(resolve => {
        //let  url = this.server + '/users/' + this.user._id;
        let url = 'assets/data/transa.json';
        this.http.get(url, data).subscribe( res => {
          let user = res.json();
          this.user =  user;
          resolve(user);
        })
    })
  }

  getBalance(data :  any) {
    return new Promise(resolve => {
        this.http.get(this.server + '/users/' + this.user._id + '/balance', data).subscribe( res => {
          let user = res.json();
          this.user =  user;
          resolve(user);
        })
    })
  }

  addFavorite(sessionName) {
    this._favorites.push(sessionName);
  }

  removeFavorite(sessionName) {
    let index = this._favorites.indexOf(sessionName);
    if (index > -1) {
      this._favorites.splice(index, 1);
    }
  }

  login(username) {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.setUsername(username);
    this.events.publish('user:login');
  }

  signup(username) {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.setUsername(username);
    this.events.publish('user:signup');
  }

  logout() {
    this.storage.remove(this.HAS_LOGGED_IN);
    this.storage.remove('username');
    this.events.publish('user:logout');
  }

  setUsername(username) {
    this.storage.set('username', username);
  }

  getUsername() {
    return this.storage.get('username').then((value) => {
      return value;
    });
  }

  // return a promise
  hasLoggedIn() {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
    });
  }
}
