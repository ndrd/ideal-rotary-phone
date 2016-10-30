import { NavController, ViewController } from 'ionic-angular';
export declare class Payments {
    navCtrl: NavController;
    viewCtrl: ViewController;
    data: any;
    constructor(navCtrl: NavController, viewCtrl: ViewController);
    ionViewDidLoad(): void;
    dismiss(data?: any): void;
}
