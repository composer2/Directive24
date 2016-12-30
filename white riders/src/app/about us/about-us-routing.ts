import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutUsComponent } from './about-us.component';
import { AboutUsInfoComponent } from './about-us-info.component';

const routes: Routes = [
  {
    path: '',
    component: AboutUsComponent,
    children: [
      { path: '', component: AboutUsInfoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRouterModule { }

export const routedComponents = [
  AboutUsComponent,
  AboutUsInfoComponent
];
