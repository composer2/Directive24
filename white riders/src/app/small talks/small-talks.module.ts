import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SmallTalksRouterModule, routedComponents } from './small-talks-routing';

@NgModule({
  imports: [CommonModule, FormsModule, SmallTalksRouterModule],
  declarations: [routedComponents]
})
export class SmallTalksModule { }
