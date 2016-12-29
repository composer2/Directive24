import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserService } from '../shared/register.service';
import { routedComponents, RegisterRoutingModule } from './register-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, RegisterRoutingModule],
  declarations: [routedComponents],
  providers: [UserService],
})
export class RegisterModule { }
