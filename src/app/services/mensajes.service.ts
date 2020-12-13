import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Mensaje {
  titulo: string;
  mensaje: string;
  email: string;
  fecha: Date
}


@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor(private httpClient: HttpClient) { }




}
