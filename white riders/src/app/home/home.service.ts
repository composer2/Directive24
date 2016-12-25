import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { CONFIG } from '../config';

let homeUrl = CONFIG.baseUrls.home;

export class HomeInfo {
  id: number;
  name: string;
  price: number;
  picture: string;
}

@Injectable()
export class HomeService {
  constructor(private http: Http) { }

  getHomeInfo(id: number) {
    return this.getInfo()
      .map(info => info.find(homeInfo => homeInfo.id === id));
  }

  getInfo() {
    return this.http
      .get(homeUrl)
      .map((response: Response) => <HomeInfo[]>response.json().data);
  }
}