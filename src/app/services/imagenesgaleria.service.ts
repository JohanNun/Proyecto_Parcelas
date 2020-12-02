import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagenesgaleriaService {

  constructor(private httpClient: HttpClient) { }

  getImagenes() {
    return this.httpClient.get<any>('../../assets/fotos.json').toPromise()
      .then(res => res.data)
      .then(data => { return data; });
  };
}
