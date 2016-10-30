import { UserData } from '../../providers/user-data';
import { NavController, ModalController } from 'ionic-angular';
export declare class HomePage {
    navCtrl: NavController;
    modalCtrl: ModalController;
    userData: UserData;
    private user;
    payment: any;
    incoming: any;
    constructor(navCtrl: NavController, modalCtrl: ModalController, userData: UserData);
    presentFilter(): void;
    showPaymentView(): void;
    showIncomingView(): void;
}
