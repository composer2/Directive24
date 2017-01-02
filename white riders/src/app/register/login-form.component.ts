import { Component, OnInit } from '@angular/core';
import { Input, trigger, state, style, transition, animate } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';

import { Api } from '../shared/kinvey-api.service';
import { User } from './user';
import { UserService } from './register.service';

@Component({
    selector: 'login-form',
    templateUrl: 'login-form.component.html',
    styleUrls: ['form.component.css']
//     animations: [
//         trigger('loginBtnState', [
//             state('inactive', style({
//                 backgroundColor: 'white',
//                 transform: 'scale(1)'
//             })),
//             state('active', style({
//                 backgroundColor: 'blue',
//                 transform: 'scale(1.1)'
//             })),
//             transition('inactive => active', animate('100ms ease-in')),
//             transition('active => inactive', animate('100ms ease-out'))
//         ])
//     ]

})
export class LoginFormComponent implements OnInit{
    model: any = {
        username: '',
        password: ''
    };

    data: any = {};
    public userToLogin: FormGroup;
    options: Object;


    constructor(
        private router: Router,
        private userService: UserService,
        private _service: NotificationsService,
        fb: FormBuilder
    ) {
        this.userToLogin = fb.group({
            'username': ['', Validators.compose([Validators.required, Validators.minLength(5)])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
        });

        this.options = { timeOut: 3000, pauseOnHover: true, showProgressBar: false, animate: 'scale', position: ['right', 'top'] };
    }

    ngOnInit() {
    }

    login() {
        this.data = {
            username: this.model.username,
            password: this.model.password
        }

        this.userService.loginUser(this.data)
            .subscribe(data => {
                this._service.success('Success!', 'Logged in!');
                setTimeout(() => this.router.navigate(['./home']), 3000);
            },
            (err: any) => {
                this._service.error('', 'Invalid username or password!')
            });
    }
}