import { Component, OnInit } from '@angular/core';
import { Input, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';

import { Api } from '../shared/kinvey-api.service';
import { User } from './user';
import { UserService } from './register.service';

import { pageTransition } from '../shared/routing-animations';


@Component({
    selector: 'login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./form.component.css'],
    animations: [pageTransition,
        trigger('loginBtnState', [
            state('inactive', style({
                transform: 'scale(1)',
                backgroundColor: 'white',
                color: 'blue'
            })),
            state('active', style({
                transform: 'scale(1.4)',
                backgroundColor: 'blue',
                color: 'white'
            })),
            transition('inactive <=> active', animate('200ms ease-in')),
        ]),
        trigger('inputStateUser', [
            state('fadeInUser', style({
                borderColor: 'lightgray'
            })),
            state('fadeOutUser', style({
                borderColor: 'blue',
                borderWidth: '4px'
            })),
            transition('fadeInUser <=> fadeOutUser', animate('200ms ease-in')),

            // transition('fadeInUser <=> fadeOutUser', [
            //     animate('300ms', keyframes([
            //         style({opaciti: 0, transform: 'translateX(-10px)', offset: 0}),
            //         style({opaciti: 1, transform: 'translateX(10px)', offset: 0.3}),
            //         style({opaciti: 0, transform: 'translateX(-10px)', offset: 1})
            //     ]))
            // ])
        ]),
        trigger('inputStatePass', [
            state('fadeInPass', style({
                borderColor: 'lightgray'
            })),
            state('fadeOutPass', style({
                borderColor: 'blue',
                borderWidth: '4px'
            })),
            transition('fadeInPass <=> fadeOutPass', animate('200ms ease-in')),
            
            // transition('fadeInPass <=> fadeOutPass', [
            //     animate('300ms', keyframes([
            //         style({opaciti: 0, transform: 'translateX(0px)', offset: 0}),
            //         style({opaciti: 1, transform: 'translateX(10px)', offset: 0.3}),
            //         style({opaciti: 0, transform: 'translateX(0px)', offset: 1})
            //     ]))
            // ])
        ])
    ]

})
export class LoginFormComponent implements OnInit {
    pageOnLoad: string = 'in';

    model: any = {
        username: '',
        password: ''
    };

    data: any = {};
    public userToLogin: FormGroup;
    options: Object;
    state: string = 'inactive';
    inputStateUser: string = 'fadeInUser';
    inputStatePass: string = 'fadeInPass';

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
    this.pageOnLoad = (this.pageOnLoad === 'in' ? 'out' : 'in');
    }

    toggleState() {
        this.state = (this.state === 'inactive' ? 'active' : 'inactive');
    }

    inputToggleStateUser() {
        this.inputStateUser = (this.inputStateUser === 'fadeInUser' ? 'fadeOutUser' : 'fadeInUser');
    }

    inputToggleStatePass() {
        this.inputStatePass = (this.inputStatePass === 'fadeInPass' ? 'fadeOutPass' : 'fadeInPass');
    }

    login() {
        this.data = {
            username: this.model.username,
            password: this.model.password
        }

        this.userService.loginUser(this.data)
            .subscribe(data => {
                this._service.success('Success!', 'Registred!');
                setTimeout(() => this.router.navigate(['./home']), 2000);
            },
            (err: any) => {
                this._service.error('Error!', 'Invalid username or password!')
            });
    }
}