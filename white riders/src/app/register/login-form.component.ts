import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Api } from '../shared/kinvey-api.service';
import { User } from './user';
import { UserService } from './register.service';

@Component({
    selector: 'login-form',
    templateUrl: './login-form.component.html'
})
export class LoginFormComponent implements OnInit{
    model: any = {
        username: '',
        password: ''
    };

    data: any = {};
    public userToLogin: FormGroup;

    constructor(
        private router: Router,
        private UserService: UserService,
        fb: FormBuilder
    ) {
        this.userToLogin = fb.group({
            'username': ['', Validators.compose([Validators.required, Validators.minLength(5)])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
        });
    }

    ngOnInit() {
    }

    login() {
        this.data = {
            username: this.model.username,
            password: this.model.password
        }

        this.UserService.loginUser(this.data)
            .subscribe(data => {
                this.router.navigate(['/home']);
            })
    }
}