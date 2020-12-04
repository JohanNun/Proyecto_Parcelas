import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HuertComService {

  constructor(private httpClient: HttpClient) { }


  getAll(): any {
    return this.httpClient.get<any>('../../assets/huertos.json').toPromise()
      .then(res => {
        return res
      })
      .catch(error => console.log(error))
  }




}
