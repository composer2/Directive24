import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RelaxZoneDetailsComponent } from './relax-zone-details.component';
import { RelaxZoneComponent } from './relax-zone.component';

const routes: Routes = [
  {
    path: '',
    component: RelaxZoneComponent,
    children: [
      { path: '', component: RelaxZoneDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelaxZoneRouterModule { }

export const routedComponents = [
  RelaxZoneComponent,
  RelaxZoneDetailsComponent
];
