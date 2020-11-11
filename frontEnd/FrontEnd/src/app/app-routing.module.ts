import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddToRedisComponent } from './components/add-to-redis/add-to-redis.component'
import { GraficaDepComponent } from './components/grafica-dep/grafica-dep.component'
import { GraficaEdadesComponent } from './components/grafica-edades/grafica-edades.component'
import { HomeComponent } from './components/home/home.component'


const routes: Routes = [
  { path: 'addToRedis', component: AddToRedisComponent },
  { path: 'graficaDep', component: GraficaDepComponent},
  { path: 'graficaEdades', component: GraficaEdadesComponent},
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
