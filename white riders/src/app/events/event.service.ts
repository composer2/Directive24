import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export class Event {
  _id?: string;
  day: number;
  month: string;
  name: string;
  picture: string;
  shortDescription: string;
  website: string;
}

@Injectable()
export class EventService {

  private headersAllEvents: Headers = new Headers({
    'Authorization': 'Basic a2lkX1N5dE1yRXhCZzo3M2VlNGYzNTRkNjI0YzBiOGYwMTI3NmYxYjM5OWNkYQ=='
  });
  private headersCreateUpdateDelete: Headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': 'Basic a2lkX1N5dE1yRXhCZzo3M2VlNGYzNTRkNjI0YzBiOGYwMTI3NmYxYjM5OWNkYQ=='

  });

  constructor(private http: Http) { }

  getEvents(): Observable<any> {
    return this.http.get(
      'https://baas.kinvey.com/appdata/kid_SytMrExBg/events',
      { headers: this.headersAllEvents })
      .map(this.checkForErrors)
      .catch(err => Observable.throw(err))
      .map((response: Response) => response.json());
  }
  addEvent(data): Observable<any> {
    return this.http.post(
      `https://baas.kinvey.com/appdata/kid_SytMrExBg/events`,
      JSON.stringify(data),
      { headers: this.headersCreateUpdateDelete })
      .map(this.checkForErrors)
      .catch(err => Observable.throw(err))
      .map(response => response.json());
  }
  deleteEvent(id: string): Observable<any> {
    return this.http.delete(
      `https://baas.kinvey.com/appdata/kid_SytMrExBg/events/${id}`,
      { headers: this.headersAllEvents })
      .map(this.checkForErrors)
      .catch(err => Observable.throw(err))
      .map(response => response.json());
  }
  updateEvent(id: string, data): Observable<any> {
    return this.http.put(
      `https://baas.kinvey.com/appdata/kid_SytMrExBg/events/${id}`,
      JSON.stringify(data),
      { headers: this.headersCreateUpdateDelete })
      .map(this.checkForErrors)
      .catch(err => Observable.throw(err))
      .map(response => response.json());
  }

  private checkForErrors(resp: Response) {
    if (resp.status >= 200 && resp.status < 300) {
      return resp;
    } else {
      let error = new Error(resp.statusText);
      error['response'] = resp;
      console.log(error);
      throw error;
    }
  }
}
