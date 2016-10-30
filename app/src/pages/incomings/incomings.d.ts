import { NavController, ViewController, LoadingController } from 'ionic-angular';
export declare class Incomings {
    navCtrl: NavController;
    viewCtrl: ViewController;
    loadingCtrl: LoadingController;
    loader: any;
    generated: boolean;
    amount: string;
    qrGenerator: any;
    constructor(navCtrl: NavController, viewCtrl: ViewController, loadingCtrl: LoadingController);
    ionViewDidLoad(): void;
    generateRequest(): void;
    cancelRequest(): void;
    getSignedPetition(): string;
    dismiss(data?: any): void;
}
