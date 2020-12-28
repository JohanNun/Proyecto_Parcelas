import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface cultivo {
  id: number;
  imagen: string;
  nombre: string;
  descripcion: string;
  siembra: string;
  transplante: string;
  sustrato: string;
  clima: string;
  riego: string;
  luz: string;
  plaga: string;
  cosecha: string;
}


@Injectable({
  providedIn: 'root'
})
export class CultivoService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    /* this.baseUrl = "http://localhost:3000/api/cultivos" */
    this.baseUrl = "https://huertos-urbanos.herokuapp.com/api/cultivos"

  }

  getInfo(pNombre): Promise<cultivo> {

    return this.httpClient.get<cultivo>(`${this.baseUrl}/${pNombre}`).toPromise()


  }

}
