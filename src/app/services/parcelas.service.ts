import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface parcela {
  titulo: string,
  tamano_total: number,
  tamano_disponible: number,
  precio_metro: number,
  images: string,
  localizacion: string,
  descripcion: string
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


  getById(pId): Promise<parcela> {
    return this.httpClient.get<parcela>(`${this.baseUrl}/${pId}`).toPromise();
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
