import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfinitescrollaPageRoutingModule } from './infinitescrolla-routing.module';

import { InfinitescrollaPage } from './infinitescrolla.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfinitescrollaPageRoutingModule
  ],
  declarations: [InfinitescrollaPage]
})
export class InfinitescrollaPageModule {}
