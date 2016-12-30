import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserService } from './register.service';
// import { routedComponents, RegisterRoutingModule } from './register-routing.module';
import { loginRoutedComponents, LoginRoutingModule} from './login-routing.module';

@NgModule({
  imports: [CommonModule,
            FormsModule,
            // RegisterRoutingModule,
            LoginRoutingModule
  ],
  declarations: [
    //   routedComponents,
  loginRoutedComponents
  ],
  providers: [UserService],
})
export class LoginModule { }
