import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RelaxZoneRouterModule, routedComponents } from './relax-zone-routing';

@NgModule({
  imports: [CommonModule, FormsModule, RelaxZoneRouterModule],
  declarations: [routedComponents],
})
export class RelaxZoneModule { }
