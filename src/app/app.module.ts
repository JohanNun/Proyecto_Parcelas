import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { ComunidadComponent } from './comunidad/comunidad.component';
import { HuertosComunitariosComponent } from './huertos-comunitarios/huertos-comunitarios.component';
<<<<<<< HEAD
import { InfoCultivoComponent } from './info-cultivo/info-cultivo.component';
=======
import { FormularioComponent } from './formulario/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
>>>>>>> 5924dcf0030e341ce811e0dace93ea76b1c812b1


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BuscadorComponent,
    ComunidadComponent,
    HuertosComunitariosComponent,
<<<<<<< HEAD
    InfoCultivoComponent
=======
    FormularioComponent
>>>>>>> 5924dcf0030e341ce811e0dace93ea76b1c812b1
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
