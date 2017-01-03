import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { UserService } from './register.service';
import { loginRoutedComponents, LoginRoutingModule } from './login-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SimpleNotificationsModule,
        ReactiveFormsModule,
        LoginRoutingModule,
    ],
    declarations: [
        loginRoutedComponents
    ],
    providers: [UserService],
})
export class LoginModule { }
