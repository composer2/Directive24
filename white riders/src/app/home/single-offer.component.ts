import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HomeInfo, HomeService } from '../home/home.service';

@Component({
  selector: 'singleOffer',
  templateUrl: 'single-offer.component.html'
})
export class SingleOfferComponent implements OnInit {
  @Input() singleOffer: HomeInfo;

  private id: any;

  constructor(
    private homeService: HomeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    if (!this.singleOffer) {
      this.route
        .params
        .map(params => params['id'])
        .do(id => this.id = +id)
        .subscribe(id => this.getSingleOffer());
    }
  }

  private getSingleOffer() {
    this.homeService.getHomeInfo(this.id)
      .subscribe(singleOffer => this.setEditCharacter(singleOffer));
  }

  private gotoOffersList() {
    let route = ['/home'];
    this.router.navigate(route);
  }

  private setEditCharacter(offer: HomeInfo) {
    if (offer) {
      this.singleOffer = offer;
    } else {
      this.gotoOffersList();
    }
  }
}
