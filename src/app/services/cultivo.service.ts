import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CultivoService {

  constructor(private httpClient: HttpClient) { }

  getInfo(pId) {

    return this.httpClient.get<any>('../../assets/cultivos.json').toPromise()
      .then(res => {
        pId = res;
        console.log(pId);

      })


  }

}
