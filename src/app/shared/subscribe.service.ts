import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class SubscribeService {
  private headersSubscribe: Headers = new Headers({
    'Authorization': 'Basic a2lkX1N5dE1yRXhCZzo3M2VlNGYzNTRkNjI0YzBiOGYwMTI3NmYxYjM5OWNkYQ==',
    'Content-Type': 'application/json',
  });
  constructor(private http: Http) {
  }

  subscribeForNews(email): Observable<any> {
    return this.http.post(
      `https://baas.kinvey.com/appdata/kid_SytMrExBg/subscribeForNews`,
      JSON.stringify(email),
      { headers: this.headersSubscribe })
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