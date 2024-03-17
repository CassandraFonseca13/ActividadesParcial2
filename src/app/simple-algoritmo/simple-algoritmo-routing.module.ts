import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimpleAlgoritmoPage } from './simple-algoritmo.page';

const routes: Routes = [
  {
    path: '',
    component: SimpleAlgoritmoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimpleAlgoritmoPageRoutingModule {}
