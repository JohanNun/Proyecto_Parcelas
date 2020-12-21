import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { usuario } from './usuarios.service';

export interface parcela {
  id: number;
  titulo: string,
  tamano_total: number,
  tamano_disponible: number,
  precio_metro: number,
  images: string,
  calle: string,
  CP: number;
  ciudad: string;
  descripcion: string;
  fk_usuario: number;
  trozo_disponible: number;
}

@Injectable({
  providedIn: 'root'
})
export class ParcelasService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {

    this.baseUrl = 'http://localhost:3000/api/parcelas'

  }


  getAll(): Promise<parcela[]> {
    return this.httpClient.get<parcela[]>(this.baseUrl).toPromise();
  }

  selectByPrecioUp(): Promise<parcela[]> {
    return this.httpClient.get<parcela[]>(`${this.baseUrl}/precioAsc`).toPromise();
  }

  selectByPrecioDown(): Promise<parcela[]> {
    return this.httpClient.get<parcela[]>(`${this.baseUrl}/precioDesc`).toPromise();
  }

  selectByTamano(): Promise<parcela[]> {
    return this.httpClient.get<parcela[]>(`${this.baseUrl}/tamanoDesc`).toPromise();
  }


  getCiudad(pCiudad): Promise<parcela[]> {
    return this.httpClient.get<parcela[]>(`${this.baseUrl}/${pCiudad}`).toPromise();
  }


  getById(pId): Promise<parcela> {
    return this.httpClient.get<parcela>(`${this.baseUrl}/parcela/${pId}`).toPromise();
  }

  getParcelaByUsuarioId(pUsuarioId): Promise<parcela[]> {
    return this.httpClient.get<parcela[]>(`${this.baseUrl}/user/${pUsuarioId}`).toPromise();
  }


  getParcelasByUserName(pUserName): Promise<parcela[]> {
    return this.httpClient.get<parcela[]>(`${this.baseUrl}/user/parcela/${pUserName}`).toPromise();
  }



  update(pFormValue): Promise<parcela> {
    return this.httpClient.put<parcela>(this.baseUrl, pFormValue).toPromise();
  }



  create(pFormValue): Promise<parcela> {
    return this.httpClient.post<parcela>(this.baseUrl, pFormValue).toPromise();
  }


  isLogged(): boolean {
    if (localStorage.getItem('login_usuario')) {
      return true;
    } else {
      return false;
    }
  }


}
