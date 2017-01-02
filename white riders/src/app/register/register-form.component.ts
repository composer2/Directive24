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
    selector: 'register-form',
    templateUrl: 'register-form.component.html',
    styleUrls: ['form.component.css'],
<<<<<<< HEAD
    animations: [
        trigger('RegBtnState', [
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
        trigger('inputStateFirstName', [
            state('focusOutFirstName', style({
                borderColor: 'lightgray'
            })),
            state('focusInFirstName', style({
                borderColor: 'blue',
                borderWidth: '4px'
            })),
            transition('focusOutFirstName <=> focusInFirstName', animate('200ms ease-in')),

        ]),
        trigger('inputStateLastName', [
            state('focusOutLastName', style({
                borderColor: 'lightgray'
            })),
            state('focusInLastName', style({
                borderColor: 'blue',
                borderWidth: '4px'
            })),
            transition('focusOutLastName <=> focusInName', animate('200ms ease-in')),

        ]),
        trigger('inputStateUser', [
            state('focusOutUser', style({
                borderColor: 'lightgray'
            })),
            state('focusInUser', style({
                borderColor: 'blue',
                borderWidth: '4px'
            })),
            transition('focusOutUser <=> focusInUser', animate('200ms ease-in')),

        ]),
        trigger('inputStatePass', [
            state('focusOutPass', style({
                borderColor: 'lightgray'
            })),
            state('focusInPass', style({
                borderColor: 'blue',
                borderWidth: '4px'
            })),
            transition('focusOutPass <=> focusInPass', animate('200ms ease-in')),

        ])
    ]
=======
    animations: [pageTransition]

>>>>>>> 43b2dc0bbe17805cb3045055be8da233b28edb95
})

export class RegisterFormComponent {
    pageOnLoad: string = 'in';
    model: any = {
        firstName: '',
        lastName: '',
        username: '',
        password: ''
    };
    data: any = {};
    options: Object;
    state: string = 'inactive';
    inputStateFirstName: string = 'focusOutFirstName';
    inputStateLastName: string = 'focusOutLastName';
    inputStateUser: string = 'focusOutUser';
    inputStatePass: string = 'focusOutPass';

    userToRegister: FormGroup = new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl(),
        username: new FormControl(),
        password: new FormControl()
    });

    constructor(
        private router: Router,
        private userService: UserService,
        private _service: NotificationsService,
        private fb: FormBuilder
    ) {
        this.options = { timeOut: 3000, pauseOnHover: true, showProgressBar: false, animate: 'scale', position: ['right', 'top'] };

    }

    ngOnInit() {
        this.pageOnLoad = (this.pageOnLoad === 'in' ? 'out' : 'in');
        this.userToRegister = this.fb.group({
            firstName: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
            lastName: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
            username: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
            password: ['', Validators.compose([Validators.required, Validators.minLength(4)])]
        });

    }

    toggleState() {
        this.state = (this.state === 'inactive' ? 'active' : 'inactive');
    }

    inputToggleStateFisrtName() {
        this.inputStateFirstName = (this.inputStateFirstName === 'focusOutFirstName' ? 'focusInFirstName' : 'focusOutFirstName');
    }

    inputToggleStateLastName() {
        this.inputStateLastName = (this.inputStateLastName === 'focusOutLastName' ? 'focusInLastName' : 'focusOutLastName');
    }

    inputToggleStateUser() {
        this.inputStateUser = (this.inputStateUser === 'focusOutUser' ? 'focusInUser' : 'focusOutUser');
    }

    inputToggleStatePass() {
        this.inputStatePass = (this.inputStatePass === 'focusOutPass' ? 'focusInPass' : 'focusOutPass');
    }


    register() {
        this.data = {
            firstName: this.model.firstName,
            lastName: this.model.lastName,
            username: this.model.username,
            password: this.model.password,
        }

        this.userService.registerUser(this.data)
            .subscribe(data => {
                this._service.success('Success!', 'Logged in!');
                setTimeout(() => this.router.navigate(['./home']), 2000);
                console.log(data);
            },
            (err: any) => {
                this._service.error('Error!', 'Invalid username or password!')
            });
    }
}