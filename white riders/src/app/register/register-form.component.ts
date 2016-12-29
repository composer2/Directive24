import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Api } from '../shared/kinvey-api.sevice';
import { User } from './user';
import { UserService } from './register.service';

@Component({
    selector: 'register-form',
    templateUrl: 'register-form.component.html'
})

export class RegisterFormComponent {
    model: any = {};
    data: any = {};

    constructor(
        private router: Router,
        private userService: UserService
    ) { }

    register() {
        this.data = {
            username: this.model.username,
            password: this.model.password
        }
        this.userService.registerUser(this.data)
            .subscribe(
                data => console.log("registred")
            )
    }
}
