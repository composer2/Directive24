import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TopOffersService } from './top-offers.service';
import { routedComponents, TopOffersRoutingModule } from './top-offers-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, TopOffersRoutingModule],
  declarations: [routedComponents],
  providers: [TopOffersService],
})
export class TopOffersModule { }
