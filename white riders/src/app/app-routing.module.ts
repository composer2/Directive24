import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'events', loadChildren: 'app/events/events.module#EventsModule' },
  { path: 'topOffers', loadChildren: 'app/top offers/top-offers.module#TopOffersModule' },
  { path: 'smallTalks', loadChildren: 'app/small talks/small-talks.module#SmallTalksModule' },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
  { path: 'users', loadChildren: 'app/register/register.module#RegisterModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routableComponents = [PageNotFoundComponent];
