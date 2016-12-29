import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InitCapsPipe } from './home.initCaps.pipe';
import { HomeRouterModule, routedComponents } from './home-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, HomeRouterModule],
  declarations: [routedComponents, InitCapsPipe]
})
export class HomeModule { }