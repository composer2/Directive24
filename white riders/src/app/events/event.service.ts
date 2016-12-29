import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export class Event {
  _id: string;
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

  constructor(private http: Http) { }

  getEvents(): Observable<any> {
    return this.http.get(
      'https://baas.kinvey.com/appdata/kid_SytMrExBg/events',
      { headers: this.headersAllEvents })
      .map(this.checkForErrors)
      .catch(err => Observable.throw(err))
      .map((response: Response) => response.json());
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
