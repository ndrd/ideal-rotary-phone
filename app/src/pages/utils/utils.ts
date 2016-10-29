import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';

/*import { NavParams, ViewController } from 'ionic-angular';

  Generated class for the Utils page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-utils',
  templateUrl: 'utils.html'
})
export class CardReader {

  constructor(public navCtrl: NavController,
  			  public navParams : NavParams,
  			  public viewCtrl: ViewController
) {
	  // passed in array of track names that should be excluded (unchecked)
	  let params = this.navParams.data;
	  console.log(params);

	}

  ionViewDidLoad() {
    console.log('Hello Utils Page');
  }



  resetFilters() {

  }

  applyFilters() {

  }

  dismiss(data?: any) {
    // using the injected ViewController this page
    // can "dismiss" itself and pass back data
    this.viewCtrl.dismiss(data);
  }

}
