import { NavController } from 'ionic-angular';
import { UserData } from '../../providers/user-data';
export declare class Transactions {
    navCtrl: NavController;
    userData: UserData;
    transactions: any[];
    queryTransactions: string;
    constructor(navCtrl: NavController, userData: UserData);
    ionViewDidLoad(): void;
    searchTransactions(): void;
}
