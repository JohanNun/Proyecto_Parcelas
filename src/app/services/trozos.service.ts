import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';



export interface Trozo {
  id: number;
  fk_parcela: number;
  fk_usuario: number;
  tamano: number;
}


@Injectable({
  providedIn: 'root'
})
export class TrozosService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {

    this.baseUrl = 'http://localhost:3000/api/trozos'
  }


  getAll(): Promise<Trozo[]> {
    return this.httpClient.get<Trozo[]>(this.baseUrl).toPromise();
  }


  getByIdParcela(pIdParcela): Promise<Trozo> {
    return this.httpClient.get<Trozo>(`${this.baseUrl}/parcela/${pIdParcela}`).toPromise();
  }


  getByIdUsuario(pIdUsuario): Promise<Trozo> {
    return this.httpClient.get<Trozo>(`${this.baseUrl}/user/${pIdUsuario}`).toPromise();
  }


  reservar(tamano, pFkParcela, pFkUsuario): Promise<Trozo> {
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': localStorage.getItem('login_usuario')
      })
    }

    return this.httpClient.post<Trozo>(`${this.baseUrl}/nuevo_trozo/${pFkParcela}`, { tamano: tamano, fk_parcela: pFkParcela, fk_usuario: pFkUsuario }, httpOptions).toPromise();
  }




  cancelar(idTrozo): Promise<Trozo> {
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': localStorage.getItem('login_usuario')
      })
    }

    return this.httpClient.delete<Trozo>(`${this.baseUrl}/${idTrozo}`, httpOptions).toPromise();
  }


}
