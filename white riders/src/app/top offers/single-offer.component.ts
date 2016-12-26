import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var $: JQueryStatic;

import { TopOffers, TopOffersService } from './top-offers.service';

@Component({
  selector: 'single-offer',
  templateUrl: 'single-offer.component.html',
  styles: [`
  .hide-bullets {
    list-style:none;
    margin-left: -40px;
    margin-top:20px;
}

.thumbnail {
    padding: 0;
}

.carousel-inner>.item>img, .carousel-inner>.item>a>img {
    width: 100%;
}
#slider-box{
    width: 40%;
    float: left;    
}
#slider-thumbs{
    width: 40%;
    height: 80%;     
    clear: both; 
}
#price-color{
    color: red;
    font-size: 16px;
}
#stars{
    font-size: 35px;
    color: darkorange;
}
#stars a{
    font-size: 15px;
}
#separator{
    font-size: 15px;
    color: black;    
}
#review-text{
    color: black;
    font-size: 20px;
}
#heading-review{
font-size: 14px;
font-family: Cambria, Cochin, Georgia, Times, Times New Roman, serif
}
@media  screen and (max-width: 1020px) {
#price-color{
    font-size: 14px;
}
#stars{
    font-size: 25px;
    color: darkorange;
}
#stars a{
    font-size: 12px;
}
#separator{
    font-size: 12px;
    color: black;    
}
#review-text{
    color: black;
    font-size: 16px;
}
#heading-review{
font-size: 12px;
font-family: Cambria, Cochin, Georgia, Times, Times New Roman, serif
}
}

@media  screen and (max-width: 767px) {
#slider-thumbs{
    display: none;
}
#slider-box{
    width: 100%;
}
}
@media  screen and (max-width: 426px) {
#price-btns{
  margin-left:25px;
}
#price-btns h5{
font-size:20px;
}
#price-btns a{
  width:40%
}
#stars{
    font-size: 20px;
  margin-left:15px;
}
#offer-name{
  margin-left:15px;
}
}
`]
})
export class SingleOfferComponent implements OnInit {
  @Input() singleOffer: TopOffers;
  allpictures;
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
      this.allpictures = singleOffer.pictures;
      console.log(this.allpictures);
    } else {
      this.gotoTopOffers();
    }
  }
}
