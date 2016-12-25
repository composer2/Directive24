import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TopOffers, TopOffersService } from './top-offers.service';

@Component({
  selector: 'single-offer',
  templateUrl: 'single-offer.component.html'
})
export class SingleOfferComponent implements OnInit {
  @Input() singleOffer: TopOffers;

  private id: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private topOffersService: TopOffersService) { }

  ngOnInit() {
    if (!this.singleOffer) {
      this.route
        .params
        .map(params => params['id'])
        .do(id => this.id = +id)
        .subscribe(id => this.getOffer());
    }
  }

  private getOffer() {
    this.topOffersService.getSingleOffer(this.id)
      .subscribe((offer: TopOffers) => this.setEditOffer(offer));
  }

  private gotoTopOffers() {
    let route = ['/topOffers'];
    this.router.navigate(route);
  }

  private setEditOffer(singleOffer: TopOffers) {
    if (singleOffer) {
      this.singleOffer = singleOffer;
    } else {
      this.gotoTopOffers();
    }
  }
}
