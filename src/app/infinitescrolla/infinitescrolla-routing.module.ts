import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfinitescrollaPage } from './infinitescrolla.page';

const routes: Routes = [
  {
    path: '',
    component: InfinitescrollaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfinitescrollaPageRoutingModule {}
