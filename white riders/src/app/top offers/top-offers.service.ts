import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { CONFIG } from '../config';

let allOffersUrl = CONFIG.baseUrls.allOffers;

export class TopOffers {
  id: number;
  name: string;
  price: number;
  pictures: string[];
  description: string[];
  freeDelivery: boolean;
  inStock: boolean;
  soldBy: string;
  customerReviews;
}

@Injectable()
export class TopOffersService {
  constructor(private http: Http) {
  }

  getSingleOffer(id: number) {
    return this.getAllOffers()
      .map(offers => offers.find(offer => offer.id === id));
  }

  getAllOffers() {
    return this.http
      .get(allOffersUrl)
      .map((response: Response) => <TopOffers[]>response.json().data);
  }
}
