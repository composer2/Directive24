import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const STORAGE_KEY_USERNAME = 'key-username',
    STORAGE_KEY_TOKEN = 'key-token';

@Injectable()
export class CredentialsService {
    isUserLoggedIn(): Observable<boolean> {
        let isUserLoggedIn = localStorage.getItem(STORAGE_KEY_TOKEN) !== null;
        return Observable.of(isUserLoggedIn);
    }
    saveToken(username: string, token: string): Observable<any> {
        localStorage.setItem(STORAGE_KEY_USERNAME, username);
        localStorage.setItem(STORAGE_KEY_TOKEN, token);

        return Observable.of(null);
    }
}