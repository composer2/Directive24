import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Interview, SmallTalksService } from './small-talks.service';
import { pageTransition } from '../shared/routing-animations';

@Component({
    selector: 'single-interview',
    templateUrl: 'single-interview.component.html',
    styleUrls: ['single-interview.component.css'],
    animations: [pageTransition]
})

export class SingleInterviewComponent implements OnInit {
    pageOnLoad: string = 'in';
    @Input() singleInterview: Interview;

    private id: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private smallTalksService: SmallTalksService) { }

    ngOnInit() {
    this.pageOnLoad = (this.pageOnLoad === 'in' ? 'out' : 'in');

        if (!this.singleInterview) {
            this.route
                .params
                .map(params => params['id'])
                .do(id => this.id = id)
                .subscribe(id => this.getOffer());
        }
    }

    private getOffer() {
        this.smallTalksService.getSingleInterview(this.id)
            .subscribe((singleInterview: Interview) => this.setEditInterview(singleInterview));
    }

    private gotoTopOffers() {
        let route = ['/smallTalks'];
        this.router.navigate(route);
    }

    private setEditInterview(singleInterview: Interview) {
        if (singleInterview) {
            this.singleInterview = singleInterview;
            console.log(singleInterview);
        } else {
            this.gotoTopOffers();
        }
    }

}
