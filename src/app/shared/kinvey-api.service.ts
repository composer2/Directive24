import { Injectable } from '@angular/core'
import { Http, Headers, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'

import { CredentialsService } from './credentials.service';

@Injectable()
export class Api {
    KINVEY_APP_ID = 'kid_SytMrExBg';
    KINVEY_APP_SECRET = 'fc030205b84c4104988e3749d45d37a7';
    KINVEY_MASTER_SECRET = '73ee4f354d624c0b8f01276f1b399cda';
    KINVEY_URL = 'https://baas.kinvey.com/';
    USERNAME_STORAGE_KEY = 'username-key';
    AUTH_KEY_STORAGE_KEY = 'auth-key-key';
    authBase64 = btoa(this.KINVEY_APP_ID + ':' + this.KINVEY_MASTER_SECRET);
    authBase64App = btoa(this.KINVEY_APP_ID + ':' + this.KINVEY_APP_SECRET);
    authToken = '';

    private headers: Headers = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    });

    private headersAllOffers: Headers = new Headers({
        'Authorization': 'Basic ' + this.authBase64
    });
    private allOffers = this.KINVEY_URL + 'appdata/' + this.KINVEY_APP_ID + '/allOffers';

    private headersRegLogin: Headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + this.authBase64App

    });
    private baseUrl: string = this.KINVEY_URL;
    private registerUrl: string = this.baseUrl + 'user/' + this.KINVEY_APP_ID;
    private loginUrl: string = this.registerUrl + '/login';

    constructor(
        private http: Http,
        private credentialsService: CredentialsService) {
    }


    getAllOffers(): Observable<any> {
        return this.http.get(
            this.allOffers,
            { headers: this.headersAllOffers })
            .map(this.checkForErrors)
            .catch(err => Observable.throw(err))
            .map(this.getJson);
    }

    register(data): Observable<any> {
        return this.http.post(
            `${this.registerUrl}`,
            JSON.stringify(data),
            { headers: this.headersRegLogin })
            .map(this.checkForErrors)
            .catch(err => Observable.throw(err))
            .map(this.getJson)
            .map(resp => {
                this.authToken = resp._kmd.authtoken;
                this.credentialsService.saveToken(resp.username, resp._kmd.authtoken);
                return resp;
            });
    }

    login(data): Observable<any> {
        return this.http.post(
            `${this.loginUrl}`,
            JSON.stringify(data),
            { headers: this.headersRegLogin })
            .map(this.checkForErrors)
            .catch(err => Observable.throw(err))
            .map(this.getJson)
            .map(resp => {
                this.authToken = resp._kmd.authtoken;
                this.credentialsService.saveToken(resp.username, resp._kmd.authtoken);
                return resp;
            });
    }

    get(path: string): Observable<any> {
        return this.http.get(
            `${this.baseUrl}${path}`,
            { headers: this.headers })
            .map(this.checkForErrors)
            .catch(err => Observable.throw(err))
            .map(this.getJson);
    }

    post(path: string, data): Observable<any> {
        return this.http.post(
            `${this.baseUrl}${path}`,
            JSON.stringify(data),
            { headers: this.headers })
            .map(this.checkForErrors)
            .catch(err => Observable.throw(err))
            .map(this.getJson);
    }

    delete(path: string): Observable<any> {
        return this.http.delete(
            `${this.baseUrl}${path}`,
            { headers: this.headers })
            .map(this.checkForErrors)
            .catch(err => Observable.throw(err))
            .map(this.getJson);
    }

    private checkForErrors(resp: Response) {
        if (resp.status >= 200 && resp.status < 300) {
            return resp;
        } else {
            let error = new Error(resp.statusText)
            error['response'] = resp;
            console.log(error);
            throw error;
        }
    }

    private getJson(resp: Response) {
        return resp.json();
    }
}
