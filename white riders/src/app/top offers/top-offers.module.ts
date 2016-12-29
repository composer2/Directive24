import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InitCapsPipe } from './all-offers-init.pipe';
import { OrderBy } from './single-offer-orderBy-pipe';
import { routedComponents, TopOffersRoutingModule } from './top-offers-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, TopOffersRoutingModule],
  declarations: [routedComponents, InitCapsPipe, OrderBy],
})
export class TopOffersModule { }
