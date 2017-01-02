import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { SmallTalksService, Interview } from './small-talks.service';
import { pageTransition } from '../shared/routing-animations';



@Component({
  selector: 'small-talks-interview',
  templateUrl: 'small-talks-interview.component.html',
  styleUrls: ['small-talks-interview.component.css'],
  animations: [pageTransition]
})
export class SmallTalksInterviewComponent {

  pageOnLoad: string = 'in';
  smallTalks: Interview[];


  constructor(private smallTalksService: SmallTalksService) { }

  ngOnInit() {
    this.pageOnLoad = (this.pageOnLoad === 'in' ? 'out' : 'in');
    this.smallTalks = [];
    this.smallTalksService.getSmallTalks()
      .subscribe(interviews => { this.smallTalks = interviews; console.log(this.smallTalks); });

  }
}
