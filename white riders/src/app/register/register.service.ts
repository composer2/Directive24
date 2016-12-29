import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Api } from '../shared/kinvey-api.service';
import { User } from './user';

@Injectable()
export class UserService {
    constructor(
        private http: Http,
        private api: Api
    ) { }

    registerUser(data) {
        return this.api.register(data);
    }
}