import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TopOffers } from '../shared/top-offers';
import { TopOffersService } from '../shared/top-offers.service';
import { pageTransition } from '../shared/routing-animations';


@Component({
    selector: 'single-offer',
    templateUrl: './single-offer.component.html',
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
    height:400px;
}
#slider-box{
    width: 40%;
    float: left;    
}
#slider-thumbs{
    width: 40%;
    height: 50%;     
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
#heading-review a:hover{
    color:#E74B3C;
}
#stars a:hover{
    color:#E74B3C;
}
.green-text{
    color:green;
}
.sold-by{
    color:blue;
}
.sold-by a:hover{
    color:#E74B3C;
}
#bullet-description{
    clear:both;
}
@media  screen and (max-width: 1020px) {
.carousel-inner>.item>img, .carousel-inner>.item>a>img {
    width: 100%;
    height:400px;
}
#slider-box{
    width: 50%;
    float: left;    
}
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
@media  screen and (max-width: 326px) {
    .carousel-inner>.item>img, .carousel-inner>.item>a>img {
    width: 100%;
    height:200px;
}
}
`],
  animations: [pageTransition]
})
export class SingleOfferComponent implements OnInit {
    pageOnLoad: string = 'in';
    @Input() singleOffer: TopOffers;
    allpictures;
    imgSrc;
    imgId;
    description;
    allCustomerReviews;
    private id: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private topOffersService: TopOffersService) { }

    ngOnInit() {
    this.pageOnLoad = (this.pageOnLoad === 'in' ? 'out' : 'in');

        if (!this.singleOffer) {
            this.route
                .params
                .map(params => params['id'])
                .do(id => this.id = id)
                .subscribe(id => this.getOffer());
        }
    }
    onClick(event) {
        let srcValue = event.srcElement.attributes.src;
        let value = srcValue.nodeValue;
        this.imgSrc = value;

        let idValue = event.srcElement.attributes.id;
        let value2 = idValue.nodeValue;
        this.imgId = value2;

    }
    onPrev(event) {
        if (this.imgId === 0) {
            let len = this.allpictures.length - 1;
            this.imgSrc = this.allpictures[len];
            this.imgId = len;
        } else {
            let num = +this.imgId;
            this.imgSrc = this.allpictures[num - 1];
            this.imgId = num - 1;

        }
    }
    onNext(event) {
        if (this.imgId === this.allpictures.length - 1) {
            this.imgSrc = this.allpictures[0];
            this.imgId = 0;
        } else {
            let num = +this.imgId;
            this.imgSrc = this.allpictures[num + 1];
            this.imgId = num + 1;

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
            this.imgSrc = singleOffer.pictures[0];
            this.imgId = 0;
            this.description = singleOffer.description;
            this.allCustomerReviews = singleOffer.customerReviews;
        } else {
            this.gotoTopOffers();
        }
    }

}
