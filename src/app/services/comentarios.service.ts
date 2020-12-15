import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface comentario {
  id: number;
  texto_comentario: string;
  fecha: Date;
  nombre_usuario: string;
  fk_usuario: number;
  fk_parcela: number;
}

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  baseUrl: string;

  constructor(private httpClient: HttpClient,
    private router: Router) {

    this.baseUrl = 'http://localhost:3000/api/comentarios';

  }


  getAllComentarios(): Promise<comentario[]> {
    return this.httpClient.get<comentario[]>(this.baseUrl).toPromise();
  }

  getComentariosByParcelaId(pParcelaId): Promise<comentario[]> {
    return this.httpClient.get<comentario[]>(`${this.baseUrl}/parcela/${pParcelaId}`).toPromise();
  }

  getComentariosBysuarioId(pUsuarioId): Promise<comentario[]> {
    return this.httpClient.get<comentario[]>(`${this.baseUrl}/user/${pUsuarioId}`).toPromise();
  }
}
