import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { CONFIG } from '../config';

let eventsUrl = CONFIG.baseUrls.events;

export class Event {
  id: number;
  name: string;
  type: string;
}

@Injectable()
export class EventService {
  constructor(private http: Http) {}

  getEvent(id: number) {
    return this.getEvents()
      .map(event => event.find(ev => ev.id === id));
  }

  getEvents() {
    return this.http
      .get(eventsUrl)
      .map((response: Response) => <Event[]>response.json().data);
  }
}
