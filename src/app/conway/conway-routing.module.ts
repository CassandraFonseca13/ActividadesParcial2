import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConwayPage } from './conway.page';

const routes: Routes = [
  {
    path: '',
    component: ConwayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConwayPageRoutingModule {}
