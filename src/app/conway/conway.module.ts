import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConwayPageRoutingModule } from './conway-routing.module';

import { ConwayPage } from './conway.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConwayPageRoutingModule
  ],
  declarations: [ConwayPage]
})
export class ConwayPageModule {}
