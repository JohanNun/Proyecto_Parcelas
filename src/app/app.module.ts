import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { ComunidadComponent } from './comunidad/comunidad.component';
import { HuertosComunitariosComponent } from './huertos-comunitarios/huertos-comunitarios.component';
import { InfoCultivoComponent } from './info-cultivo/info-cultivo.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BuscadorComponent,
    ComunidadComponent,
    HuertosComunitariosComponent,
    InfoCultivoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
