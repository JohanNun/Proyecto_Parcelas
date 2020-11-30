import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


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

  constructor(private httpClient: HttpClient) {

    this.baseUrl = 'http://localhost:3000/api/usuarios';

  }


  create(pFormValue): Promise<usuario> {
    return this.httpClient.post<usuario>(this.baseUrl, pFormValue).toPromise();
  }


}
