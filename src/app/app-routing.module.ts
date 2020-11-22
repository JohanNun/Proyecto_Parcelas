import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { HomeComponent } from './home/home.component';
import { HuertosComunitariosComponent } from './huertos-comunitarios/huertos-comunitarios.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'huertos-colectivos', component: HuertosComunitariosComponent },
  { path: 'form', component: FormularioComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
