import { NavController, ViewController } from 'ionic-angular';
import { UserData } from '../../providers/user-data';
export declare class CardReader {
    navCtrl: NavController;
    userData: UserData;
    viewCtrl: ViewController;
    creditCard: {
        ccv?: string;
        cardNumber?: string;
        until?: string;
        number?: string;
    };
    bankAccount: {
        clabe?: string;
    };
    submitted: boolean;
    response: any;
    constructor(navCtrl: NavController, userData: UserData, viewCtrl: ViewController);
    onSignup(form: any): void;
    processData(data: any): void;
    startScanner(): void;
    save(data: any, type: string): void;
    dismiss(data?: any): void;
}
