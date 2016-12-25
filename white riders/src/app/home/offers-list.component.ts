import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HomeInfo, HomeService } from './home.service';

@Component({
  selector: 'offers-list',
  templateUrl: 'offers-list.component.html',
  styles: [`
    .offersList {list-style-type: none;}
    *.offersList li {padding: 4px;cursor: pointer;}
    #offer-name{ text-decoration: none; color:white;}
    #offer-name:hover{ text-decoration: underline; color:#E74B3C;}
    #prize-size{font-size:14px;}
    #buy-link{ margin-top:15px;}
    .carousel .item {height: 300px;}
    .item img { position: absolute; top: 0; left: 0; min-height: 300px;}
  `]
})
export class OffersListComponent implements OnInit {
  offersList: Observable<HomeInfo[]>;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.offersList = this.homeService.getInfo();
  }
}