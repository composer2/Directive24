import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { pageTransition } from '../shared/routing-animations';


@Component({
  selector: 'contact-us-form',
  templateUrl: './contact-us-form.component.html',
  animations: [pageTransition]


})
export class ContactUsFormComponent {
  pageOnLoad: string = 'in';
  ngOnInit() {
    this.pageOnLoad = (this.pageOnLoad === 'in' ? 'out' : 'in');
  }
}