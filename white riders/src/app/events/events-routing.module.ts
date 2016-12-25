import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventComponent } from './event.component';
import { EventsComponent } from './events.component';
import { EventListComponent } from './events-list.component';

const routes: Routes = [
  {
    path: '',
    component: EventsComponent,
    children: [
      { path: '', component: EventListComponent },
      { path: ':id', component: EventComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }

export const routedComponents = [
  EventsComponent,
  EventListComponent,
  EventComponent
];
