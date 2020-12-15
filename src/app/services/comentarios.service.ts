import { Injectable } from '@angular/core';

export interface comentario {
  id: number,
  texto_comentario: string,
  fecha: Date,
  fk_usuario: number;
  fk_parcela: number;
}

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor() { }
}
