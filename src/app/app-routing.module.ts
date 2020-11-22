import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HuertosComunitariosComponent } from './huertos-comunitarios/huertos-comunitarios.component';
import { InfoCultivoComponent } from './info-cultivo/info-cultivo.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'huertos-colectivos', component: HuertosComunitariosComponent },
  { path: 'info-cultivo', component: InfoCultivoComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
