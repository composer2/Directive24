import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { TopOffers } from '../shared/top-offers';
import { TopOffersService } from '../shared/top-offers.service';
import { pageTransition } from '../shared/routing-animations';


@Component({
  selector: 'all-offers',
  templateUrl: 'all-offers.component.html',
  styles: [`
    .offers {list-style-type: none;}
    *.offers li {padding: 4px;cursor: pointer;}
    .green-text{color:green !important;}
    .price{color:red;}
    .sold-by{color:blue;}
    a:hover {color:#E74B3C;}
    .media-left > img{
      width:133px; 
      height:133px;
    @media screen and (max-width:425px) {
    .media-left > img{
      width:100px; 
      height:80px;
    }
    .media-body > h4 {
      font-size:12px;
    }
    .media-body > p {
      font-size:10px;
    }
  `],
  animations: [pageTransition],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AllOffersComponent implements OnInit {
  pageOnLoad: string = 'in';
  allOffers: TopOffers[];
  filterName: string = '-stars';
  constructor(private topOffersService: TopOffersService) { }

  changePriceOrder(event) {
    if (this.filterName === 'price') {
      this.filterName = '-price';
    } else if (this.filterName === '-price') {
      this.filterName = 'price';
    } else {
      this.filterName = 'price';
    }
  }
  changeNameOrder(event) {
    if (this.filterName === 'name') {
      this.filterName = '-name';
    } else if (this.filterName === '-name') {
      this.filterName = 'name';
    } else {
      this.filterName = 'name';
    }
  }
  changeBestSellerOrder(event) {
    if (this.filterName === 'stars') {
      this.filterName = '-stars';
    } else if (this.filterName === '-stars') {
      this.filterName = 'stars';
    } else {
      this.filterName = '-stars';
    }
  }

  ngOnInit() {
    this.pageOnLoad = (this.pageOnLoad === 'in' ? 'out' : 'in');
    this.allOffers = [];
    this.topOffersService.getAllOffers()
      .subscribe(offers => this.allOffers = offers);
  }

}
