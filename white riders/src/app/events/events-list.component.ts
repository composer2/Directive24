import { Component, OnInit } from '@angular/core';

import { Event, EventService } from './event.service';

@Component({
  selector: 'events-list',
  templateUrl: 'events-list.component.html',
  styles: [`
    .event {list-style-type: none;}
    *.event li {padding: 4px;cursor: pointer;}
  `]
})
export class EventListComponent implements OnInit {
  events: Event[];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.events = [];
    this.eventService.getEvents()
      .subscribe(ev => this.events = ev);
  }
}
