import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterFormComponent } from './register-form.component';
// import { LoginFormComponent } from './login-form.component';
import { RegisterComponent } from './register.component';
// import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
    children: [
      { path: '', component: RegisterFormComponent },
      //   { path: ':id', component: EventComponent },
      // { path: '', component: LoginFormComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }

export const routedComponents = [
  RegisterComponent,
  RegisterFormComponent,
  // LoginFormComponent,
  // LoginComponent
];
