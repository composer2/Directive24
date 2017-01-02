import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToasterModule, ToasterService} from 'angular2-toaster';

import { UserService } from './register.service';
import { routedComponents, RegisterRoutingModule } from './register-routing.module';
// import { loginRoutedComponents, LoginRoutingModule} from './login-routing.module';

@NgModule({
  imports: [
        CommonModule,
        FormsModule,
        ToasterModule, 

        // NotificationsService,
        // SimpleNotificationsModule,
        ReactiveFormsModule,
        RegisterRoutingModule,
            // LoginRoutingModule
  ],
  declarations: [routedComponents,
  // loginRoutedComponents
  ],
  providers: [UserService],
})
export class RegisterModule { }
