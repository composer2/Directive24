import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { TopOffers } from '../shared/top-offers';
import { TopOffersService } from '../shared/top-offers.service';

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
  `]
})
export class AllOffersComponent implements OnInit {
  allOffers: TopOffers[];

  constructor(private topOffersService: TopOffersService) { }

  ngOnInit() {
    this.allOffers = [];
    this.topOffersService.getAllOffers()
      .subscribe(offers => { this.allOffers = offers; console.log(this.allOffers); });

  }
}
