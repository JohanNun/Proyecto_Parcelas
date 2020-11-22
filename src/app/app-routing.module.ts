import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { HomeComponent } from './home/home.component';
import { HuertosComunitariosComponent } from './huertos-comunitarios/huertos-comunitarios.component';
import { InfoCultivoComponent } from './info-cultivo/info-cultivo.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'huertos-colectivos', component: HuertosComunitariosComponent },
<<<<<<< HEAD
  { path: 'info-cultivo', component: InfoCultivoComponent },
=======
  { path: 'form', component: FormularioComponent },
>>>>>>> 5924dcf0030e341ce811e0dace93ea76b1c812b1
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
