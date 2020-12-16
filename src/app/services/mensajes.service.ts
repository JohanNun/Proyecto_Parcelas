import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Mensaje {
  id: number;
  texto: string;
  fk_usuario_manda: number;
  fk_usuario_recibe: number;
  fecha: Date
}


@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  baserUrl: string;

  constructor(private httpClient: HttpClient) {

    this.baserUrl = 'http://localhost:3000/api/mensajes'
  }


  getAll(): Promise<Mensaje[]> {
    return this.httpClient.get<Mensaje[]>(this.baserUrl).toPromise();
  }


  getByMessageId(idMensaje): Promise<Mensaje> {
    return this.httpClient.get<Mensaje>(`${this.baserUrl}/${idMensaje}`).toPromise();
  }


  getMisMensajes(fkUsuarioManda): Promise<Mensaje[]> {
    return this.httpClient.get<Mensaje[]>(`${this.baserUrl}/user/${fkUsuarioManda}`).toPromise();
  }



  getMensajesReceptor(fkUsuarioRecibe): Promise<Mensaje[]> {
    return this.httpClient.get<Mensaje[]>(`${this.baserUrl}/userRecibe/${fkUsuarioRecibe}`).toPromise();
  }


  getNombreUsuarioPorFKRecibe(fkUsuarioRecibe): Promise<Mensaje[]> {
    return this.httpClient.get<Mensaje[]>(`${this.baserUrl}/nombreUsuarioRecibe/${fkUsuarioRecibe}`).toPromise();
  }

  getNombreUsuarioPorFKManda(fkUsuarioManda): Promise<Mensaje[]> {
    return this.httpClient.get<Mensaje[]>(`${this.baserUrl}/nombreUsuarioManda/${fkUsuarioManda}`).toPromise();
  }


  create(pTexto, pUsuarioManda, pUsuarioRecibe): Promise<Mensaje> {
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': localStorage.getItem('login_usuario')
      })
    }

    return this.httpClient.post<Mensaje>(`${this.baserUrl}/nuevo_mensaje/${pUsuarioManda}`, { texto: pTexto, fk_usuario_manda: pUsuarioManda, fk_usuario_recibe: pUsuarioRecibe }, httpOptions).toPromise();
  }


  borrar(idMensaje): Promise<Mensaje> {
    return this.httpClient.delete<Mensaje>(`${this.baserUrl}/${idMensaje}`).toPromise();
  }


}
