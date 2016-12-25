import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Event, EventService } from './event.service';

@Component({
  selector: 'single-event',
  templateUrl: 'event.component.html'
})
export class EventComponent implements OnInit {
  @Input() event: Event;

  private id: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventService: EventService) { }

  ngOnInit() {
    if (!this.event) {
      this.route
        .params
        .map(params => params['id'])
        .do(id => this.id = +id)
        .subscribe(id => this.getEvent());
    }
  }

  private getEvent() {
    this.eventService.getEvent(this.id)
      .subscribe((ev: Event) => this.setEditEvent(ev));
  }

  private gotoEvents() {
    let route = ['/events'];
    this.router.navigate(route);
  }

  private setEditEvent(event: Event) {
    if (event) {
      this.event = event;
    } else {
      this.gotoEvents();
    }
  }
}
