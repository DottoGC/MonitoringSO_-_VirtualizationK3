import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { ServicioService } from './services/servicio.service'
import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from 'ng2-charts';


import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GraficaEdadesComponent } from './components/grafica-edades/grafica-edades.component';
import { GraficaDepComponent } from './components/grafica-dep/grafica-dep.component';
import { HomeComponent } from './components/home/home.component';
import { AddToRedisComponent } from './components/add-to-redis/add-to-redis.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GraficaEdadesComponent,
    GraficaDepComponent,
    HomeComponent,
    AddToRedisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
