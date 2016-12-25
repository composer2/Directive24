import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeService } from './home.service';
import { HomeRouterModule, routedComponents } from './home-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, HomeRouterModule],
  declarations: [routedComponents],
  providers: [HomeService],
})
export class HomeModule { }