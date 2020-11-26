import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { HomeComponent } from './home/home.component';
import { HuertosComunitariosComponent } from './huertos-comunitarios/huertos-comunitarios.component';
import { InfoCultivoComponent } from './info-cultivo/info-cultivo.component';
import { LoginComponent } from './login/login.component';
import { PaginaAnuncioComponent } from './pagina-anuncio/pagina-anuncio.component';
import { PaginaBusquedaComponent } from './pagina-busqueda/pagina-busqueda.component';
import { PaginaUsuarioComponent } from './pagina-usuario/pagina-usuario.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'huertos-colectivos', component: HuertosComunitariosComponent },
  { path: 'info-cultivo', component: InfoCultivoComponent },
  { path: 'form', component: FormularioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'pagina-busqueda', component: PaginaBusquedaComponent },
  { path: 'pagina-anuncio', component: PaginaAnuncioComponent },
  { path: 'pagina-usuario', component: PaginaUsuarioComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
