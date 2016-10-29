import { Component } from '@angular/core';
import { UserData } from '../../providers/user-data';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private user : any;
  constructor(public navCtrl: NavController,
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

}
