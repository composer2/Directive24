import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { OffersListComponent } from './home-list.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: OffersListComponent },
      // { path: ':id', component: SingleOfferComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRouterModule { }

export const routedComponents = [
  HomeComponent,
  OffersListComponent,
];
