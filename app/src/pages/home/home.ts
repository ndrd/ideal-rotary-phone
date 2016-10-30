import { Component } from '@angular/core';
import { UserData } from '../../providers/user-data';
import { NavController, ModalController} from 'ionic-angular';
import { Payments } from '../payments/payments';
import { Incomings } from '../incomings/incomings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  private user : any;
  public payment :  any;
  public incoming :  any;

  constructor(public navCtrl: NavController,
              public modalCtrl : ModalController,
              public userData : UserData) {
    userData.loadUser().then( user => {
      this.user =  user;
    })
  }


  presentFilter() {
  //   let modal = this.modalCtrl.create(ScheduleFilterPage, this.excludeTracks);
  //   modal.present();

  //   modal.onDidDismiss((data: any[]) => {
  //     if (data) {
  //       this.excludeTracks = data;
  //       this.updateSchedule();
  //     }
  //   });
  }

  showPaymentView() {
    console.log('another')
    let modal = this.modalCtrl.create(Payments, this.payment);
    modal.present();

    modal.onDidDismiss((data: any[]) => {
      if (data) {
        console.log(data);
      }
    });
  }


  showIncomingView() {
    console.log('sssssss')
    let modal = this.modalCtrl.create(Incomings, this.incoming);
    modal.present();

    modal.onDidDismiss((data: any[]) => {
      if (data) {
        console.log(data);
      }
    });
  }

}
