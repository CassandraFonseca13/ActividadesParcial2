import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SimpleAlgoritmoPageModule } from './simple-algoritmo/simple-algoritmo.module';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  
  {
    path: 'conway',
    loadChildren: () => import('./conway/conway.module').then( m => m.ConwayPageModule)
  },  
  {
    path: 'infinitescrolla',
    loadChildren: () => import('./infinitescrolla/infinitescrolla.module').then( m => m.InfinitescrollaPageModule)
  },  
  {
    path: 'simple-algoritmo',
    loadChildren: () => import('./simple-algoritmo/simple-algoritmo.module').then( m => m.SimpleAlgoritmoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
