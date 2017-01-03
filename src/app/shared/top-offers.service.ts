import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { TopOffers } from './top-offers';

@Injectable()
export class TopOffersService {
  private headersAllOffers: Headers = new Headers({
    'Authorization': 'Basic a2lkX1N5dE1yRXhCZzo3M2VlNGYzNTRkNjI0YzBiOGYwMTI3NmYxYjM5OWNkYQ=='
  });
  constructor(private http: Http) {
  }

  getAllOffers(): Observable<any> {
    return this.http.get(
      'https://baas.kinvey.com/appdata/kid_SytMrExBg/allOffers',
      { headers: this.headersAllOffers })
      .map(this.checkForErrors)
      .catch(err => Observable.throw(err))
      .map((response: Response) => <TopOffers[]>response.json());
  }

  getSingleOffer(id: string) {
    return this.getAllOffers()
      .map(offers => offers.find(offer => offer._id === id));
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