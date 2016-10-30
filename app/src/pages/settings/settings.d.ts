import { NavController, ModalController } from 'ionic-angular';
import { UserData } from '../../providers/user-data';
export declare class Settings {
    navCtrl: NavController;
    userData: UserData;
    modalCtrl: ModalController;
    user: any;
    constructor(navCtrl: NavController, userData: UserData, modalCtrl: ModalController);
    getNumber(cardNumber: string): string;
    editCard(card: any): void;
    deleteCard(card: any): void;
    addPayment(): void;
    ionViewDidLoad(): void;
}
