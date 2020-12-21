import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Trozo } from './trozos.service';


export interface usuario {
  id: number;
  nombre: string;
  apellidos: string;
  nombre_usuario: string;
  email: string;
  password: string;
  repite_password: string;
  sexo: string;
  locacion: string;
  telefono: string;
  fecha_nacimiento: Date;
  imagen: string;
  descripcion: string;
  trozos: [{
    calle: string;
    images: string;
    titulo: string;
    suma: number;
  }];
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

  getUsuario(pId): Promise<usuario> {
    return this.httpClient.get<usuario>(`${this.baseUrl}/${pId}`).toPromise();
  }


  getByUserName(pUserName): Promise<usuario> {
    return this.httpClient.get<usuario>(`${this.baseUrl}/perfil/${pUserName}`).toPromise();
  }


  getUserByParcela(pIdParcela): Promise<usuario> {
    return this.httpClient.get<usuario>(`${this.baseUrl}/user/${pIdParcela}`).toPromise();
  }



  create(pFormValue): Promise<usuario> {
    return this.httpClient.post<usuario>(this.baseUrl, pFormValue).toPromise();
  }



  //Actualizar usuario
  update(pFormValue): Promise<usuario> {
    return this.httpClient.put<usuario>(this.baseUrl, pFormValue).toPromise();
  }





  login(pFormularioValue): Promise<usuario> {
    return this.httpClient.post<usuario>(`${this.baseUrl}/login`, pFormularioValue).toPromise();
  }




  isLogged(): boolean {
    if (localStorage.getItem('login_usuario')) {
      return true;
    } else {
      return false;
    }
  }

  logOut() {
    localStorage.removeItem('login_usuario');
    localStorage.removeItem('imagen_usuario');
    localStorage.removeItem('idUsuario');
    localStorage.removeItem('usuario');
  }

}
