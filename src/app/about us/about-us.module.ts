import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AboutUsRouterModule, routedComponents } from './about-us-routing';

@NgModule({
  imports: [CommonModule, FormsModule, AboutUsRouterModule],
  declarations: [routedComponents]
})
export class AboutUsModule { }