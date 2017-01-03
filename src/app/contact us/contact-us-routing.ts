import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactUsComponent } from './contact-us.component';
import { ContactUsFormComponent } from './contact-us-form.component';

const routes: Routes = [
  {
    path: '',
    component: ContactUsComponent,
    children: [
      { path: '', component: ContactUsFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactUsRouterModule { }

export const routedComponents = [
  ContactUsComponent,
  ContactUsFormComponent
];
