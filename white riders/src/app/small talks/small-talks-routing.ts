import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmallTalksComponent } from './small-talks.component';
import { SmallTalksInterviewComponent } from './small-talks-interview.component';

const routes: Routes = [
  {
    path: '',
    component: SmallTalksComponent,
    children: [
      { path: '', component: SmallTalksInterviewComponent },
      // { path: ':id', component: SingleOfferComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmallTalksRouterModule { }

export const routedComponents = [
  SmallTalksComponent,
  SmallTalksInterviewComponent,
];