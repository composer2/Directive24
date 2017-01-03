import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContactUsRouterModule, routedComponents } from './contact-us-routing';

@NgModule({
  imports: [CommonModule, FormsModule, ContactUsRouterModule],
  declarations: [routedComponents]
})
export class ContactUsModule { }