import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { SmallTalksService, Interview } from './small-talks.service';


@Component({
  selector: 'small-talks-interview',
  templateUrl: 'small-talks-interview.component.html',
  styleUrls: ['small-talks-interview.component.css']
})
export class SmallTalksInterviewComponent {

  smallTalks: Interview[];


  constructor(private smallTalksService: SmallTalksService) { }

  ngOnInit() {
    this.smallTalks = [];
    this.smallTalksService.getSmallTalks()
      .subscribe(interviews => { this.smallTalks = interviews; console.log(this.smallTalks); });

  }
}
