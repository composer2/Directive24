import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleOfferComponent } from './single-offer.component';
import { TopOffersComponent } from './top-offers.component';
import { AllOffersComponent } from './all-offers.component';


const routes: Routes = [
  {
    path: '',
    component: TopOffersComponent,
    children: [
      { path: '', component: AllOffersComponent },
      { path: ':id', component: SingleOfferComponent },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
    ],
  exports: [RouterModule]
})
export class TopOffersRoutingModule { }

export const routedComponents = [
  TopOffersComponent,
  AllOffersComponent,
  SingleOfferComponent
];
