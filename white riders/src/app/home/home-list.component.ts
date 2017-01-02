import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { TopOffers } from '../shared/top-offers';
import { TopOffersService } from '../shared/top-offers.service';
import { pageTransition } from '../shared/routing-animations';


@Component({
  selector: 'home-list',
  templateUrl: 'home-list.component.html',
  styles: [`
    .offersList {list-style-type: none;}
    *.offersList li {padding: 4px;cursor: pointer;}
    #offer-name{ text-decoration: none; color:white;}
    #offer-name:hover{ text-decoration: underline; color:#E74B3C;}
    #prize-size{font-size:14px;}
    #buy-link{ margin-top:15px;}
    .carousel .item {height: 300px;}
    .item img { position: absolute; top: 0; left: 0; min-height: 300px;}
  `],
  animations: [pageTransition]
})
export class OffersListComponent implements OnInit {
  pageOnLoad: string = 'in';
  offersList: Observable<TopOffers[]>;
  constructor(private homeService: TopOffersService) { }

  ngOnInit() {
    this.pageOnLoad = (this.pageOnLoad === 'in' ? 'out' : 'in');
    this.offersList = this.homeService.getAllOffers();
  }
}