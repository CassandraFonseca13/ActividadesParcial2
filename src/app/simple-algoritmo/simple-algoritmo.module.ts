import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SimpleAlgoritmoPageRoutingModule } from './simple-algoritmo-routing.module';

import { SimpleAlgoritmoPage } from './simple-algoritmo.page';
import * as PlotlyJS from 'plotly.js-dist-min';
import {PlotlyModule } from 'angular-plotly.js'
PlotlyModule.plotlyjs = PlotlyJS;
@NgModule({
  imports: [
    PlotlyModule,
    CommonModule,
    FormsModule,
    IonicModule,
    SimpleAlgoritmoPageRoutingModule
  ],
  declarations: [SimpleAlgoritmoPage]
})
export class SimpleAlgoritmoPageModule {}
