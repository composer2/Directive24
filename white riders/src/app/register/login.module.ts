import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { UserService } from './register.service';
// import { routedComponents, RegisterRoutingModule } from './register-routing.module';
import { loginRoutedComponents, LoginRoutingModule } from './login-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        // ToastModule,
        SimpleNotificationsModule,
        ReactiveFormsModule,
        LoginRoutingModule,
    ],
    declarations: [
        //   routedComponents,
        loginRoutedComponents
    ],
    providers: [UserService],
})
export class LoginModule { }
