import { Http } from '@angular/http';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
export declare class UserData {
    events: Events;
    storage: Storage;
    http: Http;
    _favorites: any[];
    cell: string;
    HAS_LOGGED_IN: string;
    server: string;
    user: any;
    constructor(events: Events, storage: Storage, http: Http);
    loadUser(): Promise<{}>;
    hasFavorite(sessionName: any): boolean;
    savePaymentMethod(data: any): Promise<{}>;
    deletePaymentMethod(id: string): Promise<{}>;
    requestPaymentTo(data: any): Promise<{}>;
    sendPaymentTo(data: any): Promise<{}>;
    getContacts(data: any): Promise<{}>;
    getTransactions(data: any): Promise<{}>;
    getBalance(data: any): Promise<{}>;
    addFavorite(sessionName: any): void;
    removeFavorite(sessionName: any): void;
    login(username: any): void;
    signup(username: any): void;
    logout(): void;
    setUsername(username: any): void;
    getUsername(): Promise<any>;
    hasLoggedIn(): Promise<boolean>;
}
