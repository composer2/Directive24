import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { pageTransition } from '../shared/routing-animations';


@Component({
  selector: 'relax-zone-details',
  templateUrl: 'relax-zone-details.component.html',
  styleUrls: ['relax-zone-details.component.css'],
  animations: [pageTransition]

})
export class RelaxZoneDetailsComponent {
  pageOnLoad: string = 'in';

  ngOnInit() {
    this.pageOnLoad = (this.pageOnLoad === 'in' ? 'out' : 'in');
  }
}

