import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
// import {ToasterModule, ToasterService} from 'angular2-toaster';
import {ToasterContainerComponent, ToasterService} from 'angular2-toaster';

import { Api } from '../shared/kinvey-api.service';
import { User } from './user';
import { UserService } from './register.service';

@Component({
    selector: 'register-form',
    templateUrl: 'register-form.component.html',
    styleUrls: ['form.component.css']
})

export class RegisterFormComponent {
    model: any = {
        firstName: '',
        lastName: '',
        username: '',
        password: ''
    };
    data: any = {};
    // public userToRegister: FormGroup;

    userToRegister: FormGroup = new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl(),
        username: new FormControl(),
        password: new FormControl()
    });

    // options: Object;

    constructor(
        private router: Router,
        private userService: UserService,
        private toasterService: ToasterService,
        private fb: FormBuilder
    ) {
        this.toasterService = toasterService;
        // this.userToRegister = fb.group({
        //     firstName: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
        //     lastName: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
        //     username: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
        //     password: ['', Validators.compose([Validators.required, Validators.minLength(4)])]
        // })
    }

    ngOnInit() {
        this.userToRegister = this.fb.group({
            firstName: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
            lastName: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
            username: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
            password: ['', Validators.compose([Validators.required, Validators.minLength(4)])]
        });

        // this.options = { timeOut: 2500, pauseOnHover: true, showProgressBar: false, animate: 'scale', position: ['right', 'top'] };

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
                this.router.navigate(['/home']);
                console.log(data);
            });
    }

    popToast() {
        this.toasterService.pop('success', 'User Registred', 'User Registred');
    }
}