import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConversacionComponent } from './conversacion/conversacion.component';
import { EditaParcelaComponent } from './edita-parcela/edita-parcela.component';
import { EditaPerfilComponent } from './edita-perfil/edita-perfil.component';
import { FormularioParcelaComponent } from './formulario-parcela/formulario-parcela.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HomeComponent } from './home/home.component';
import { HuertoPublicoComponent } from './huerto-publico/huerto-publico.component';
import { HuertosComunitariosComponent } from './huertos-comunitarios/huertos-comunitarios.component';
import { InfoCultivoComponent } from './info-cultivo/info-cultivo.component';
import { LoginGuard } from './login.guard';
import { LoginComponent } from './login/login.component';
import { MensajesPrivadosComponent } from './mensajes-privados/mensajes-privados.component';
import { PaginaAnuncioComponent } from './pagina-anuncio/pagina-anuncio.component';
import { PaginaBusquedaComponent } from './pagina-busqueda/pagina-busqueda.component';
import { PaginaUsuarioComponent } from './pagina-usuario/pagina-usuario.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'huertos-colectivos', component: HuertosComunitariosComponent },
  { path: 'huertos-colectivos/:huertoId', component: HuertoPublicoComponent },
  { path: 'info-cultivo', component: InfoCultivoComponent },
  { path: 'form', component: FormularioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'pagina-busqueda/:ciudad', component: PaginaBusquedaComponent },
  { path: 'pagina-anuncio/:idParcela', component: PaginaAnuncioComponent },
  { path: 'pagina-usuario/:id', component: PaginaUsuarioComponent },
  { path: 'form-parcela', component: FormularioParcelaComponent, canActivate: [LoginGuard] },
  { path: 'perfil-usuario/:id', component: PerfilUsuarioComponent },
  { path: 'mensajes-privados', component: MensajesPrivadosComponent, canActivate: [LoginGuard] },
  { path: 'edita-perfil/:id', component: EditaPerfilComponent },
  { path: 'edita-parcela/:id', component: EditaParcelaComponent },
  { path: 'conversacion/:id', component: ConversacionComponent, canActivate: [LoginGuard] },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
