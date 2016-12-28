import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InitCapsPipe } from '../shared/init.pipe';
import { routedComponents, TopOffersRoutingModule } from './top-offers-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, TopOffersRoutingModule],
  declarations: [routedComponents, InitCapsPipe],
})
export class TopOffersModule { }
