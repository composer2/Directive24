import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Api } from '../shared/kinvey-api.service';
import { User } from './user';
import { UserService } from './register.service';

@Component({
    selector: 'login-form',
    templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {
    model: any = {};
    data: any = {}

    constructor(
        private router: Router,
        private UserService: UserService
    ) { }

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