import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Api } from '../shared/kinvey-api.sevice';
import { User } from './user';
import { UserService} from '../shared/register.service';

@Component({
    moduleId: module.id,
    selector: 'register',
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
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
