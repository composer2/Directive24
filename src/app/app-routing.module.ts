import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'events', loadChildren: 'app/events/events.module#EventsModule' },
  { path: 'aboutUs', loadChildren: 'app/about us/about-us.module#AboutUsModule' },
  { path: 'contactUs', loadChildren: 'app/contact us/contact-us.module#ContactUsModule' },
  { path: 'topOffers', loadChildren: 'app/top offers/top-offers.module#TopOffersModule' },
  { path: 'smallTalks', loadChildren: 'app/small talks/small-talks.module#SmallTalksModule' },
  {path: 'relaxZone', loadChildren: 'app/relax zone/relax-zone.module#RelaxZoneModule' },
  { path: 'register', loadChildren: 'app/register/register.module#RegisterModule'},
  { path: 'login', loadChildren: 'app/register/login.module#LoginModule'},
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routableComponents = [PageNotFoundComponent];
