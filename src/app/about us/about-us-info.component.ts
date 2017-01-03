import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { pageTransition } from '../shared/routing-animations';


@Component({
  selector: 'about-us-info',
  templateUrl: './about-us-info.component.html',
  styleUrls: ['./about-us-info.component.css'],
  animations: [pageTransition]

})
export class AboutUsInfoComponent {
  pageOnLoad: string = 'in';

  ngOnInit() {
    this.pageOnLoad = (this.pageOnLoad === 'in' ? 'out' : 'in');
  }
}