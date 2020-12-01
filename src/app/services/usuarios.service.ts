import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


export interface usuario {
  nombre: string;
  apellidos: string;
  nombre_usuario: string;
  email: string;
  password: string;
  repite_password: string;
  sexo: string;
  locacion: string;
  fecha_nacimiento: Date;
  experiencia: string;
  imagen: string;
  descripcion: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  baseUrl: string;

  constructor(private httpClient: HttpClient,
    private router: Router) {

    this.baseUrl = 'http://localhost:3000/api/usuarios';

  }


  create(pFormValue): Promise<usuario> {
    return this.httpClient.post<usuario>(this.baseUrl, pFormValue).toPromise();
  }




  login(pFormularioValue): Promise<usuario> {
    return this.httpClient.post<usuario>(`${this.baseUrl}/login`, pFormularioValue).toPromise();
  }




  isLogged(): boolean {
    if (localStorage.getItem('login_usuario')) {
      return true;
    } else {
      this.router.navigate['/login'];
      return false;
    }
  }

}
