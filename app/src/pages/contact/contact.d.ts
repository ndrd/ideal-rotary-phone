import { UserData } from '../../providers/user-data';
import { NavController } from 'ionic-angular';
export declare class ContactPage {
    navCtrl: NavController;
    userData: UserData;
    searchString: string;
    contacts: any[];
    constructor(navCtrl: NavController, userData: UserData);
    searchContacts(): void;
}
