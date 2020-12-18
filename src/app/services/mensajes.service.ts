import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface Mensaje {
  fecha: string;
  fk_conversacion: number;
  fk_usuario_id: number;
  id: number;
  texto: string;
}

export interface Conversacion {
  id: number;
  mensajes: Mensaje[];
  usuario1: number;
  usuario2: number;
  nombre_usuario_1: string;
  nombre_usuario_2: string;
  imagen_1: string;
  imagen_2: string
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


  getAllConversaciones(): Promise<Conversacion[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': localStorage.getItem('login_usuario')
      })
    }

    return this.httpClient.get<Conversacion[]>(`${this.baserUrl}/conversacion`, httpOptions).toPromise();
  }



  getConversacion(pId): Promise<Conversacion> {
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': localStorage.getItem('login_usuario')
      })
    }

    return this.httpClient.get<Conversacion>(`${this.baserUrl}/conversacion/${pId}`, httpOptions).toPromise();
  }




  create(pTexto, pUsuario, pIdConversacion): Promise<Mensaje> {
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': localStorage.getItem('login_usuario')
      })
    }

    return this.httpClient.post<Mensaje>(`${this.baserUrl}/nuevo_mensaje/${pIdConversacion}`, { texto: pTexto, fk_usuario_manda: pUsuario, fk_conversacion: pIdConversacion }, httpOptions).toPromise();
  }



  createConversacion(pUsuario1, pUsuario2): Promise<Conversacion> {
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': localStorage.getItem('login_usuario')
      })
    }

    return this.httpClient.post<Conversacion>(`${this.baserUrl}/nueva_conversacion/${pUsuario2}`, { usuario1: pUsuario1, usuario2: pUsuario2 }, httpOptions).toPromise();
  }




  borrar(idMensaje): Promise<Mensaje> {
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': localStorage.getItem('login_usuario')
      })
    }
    return this.httpClient.delete<Mensaje>(`${this.baserUrl}/${idMensaje}`, httpOptions).toPromise();
  }


}
