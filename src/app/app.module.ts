import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { ComunidadComponent } from './comunidad/comunidad.component';
import { HuertosComunitariosComponent } from './huertos-comunitarios/huertos-comunitarios.component';
import { InfoCultivoComponent } from './info-cultivo/info-cultivo.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MapaComponent } from './mapa/mapa.component';
import { PaginaBusquedaComponent } from './pagina-busqueda/pagina-busqueda.component';
import { PaginaUsuarioComponent } from './pagina-usuario/pagina-usuario.component';
import { PaginaAnuncioComponent } from './pagina-anuncio/pagina-anuncio.component';
import { FormularioParcelaComponent } from './formulario-parcela/formulario-parcela.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BuscadorComponent,
    ComunidadComponent,
    HuertosComunitariosComponent,
    InfoCultivoComponent,
    FormularioComponent,
    LoginComponent,
    MapaComponent,
    PaginaBusquedaComponent,
    PaginaUsuarioComponent,
    PaginaAnuncioComponent,
    FormularioParcelaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD8sl9A2I_jgowz5eVHdM8szV9wRMR7WIw'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
