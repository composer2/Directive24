import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EventService } from './event.service';
import { routedComponents, EventsRoutingModule } from './events-routing.module';
import { SearchFilter } from './events-search-filter.pipe';

@NgModule({
  imports: [CommonModule, FormsModule, EventsRoutingModule],
  declarations: [routedComponents, SearchFilter],
  providers: [EventService],
})
export class EventsModule { }
