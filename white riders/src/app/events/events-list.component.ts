import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Event, EventService } from './event.service';

@Component({
  selector: 'events-list',
  templateUrl: 'events-list.component.html',
  styleUrls: ['events-list.component.css'],
  changeDetection: ChangeDetectionStrategy.Default

})
export class EventListComponent implements OnInit {
  events: Event[];
  values = '';

  constructor(private eventService: EventService) { }

  onKey(event: any) { // without type info
    this.values = event.target.value;
    console.log(this.values);
  }

  ngOnInit() {
    this.events = [];
    this.eventService.getEvents()
      .subscribe(event => { this.events = event; console.log(this.events); });

  }
}
