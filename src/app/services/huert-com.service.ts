import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HuertComService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/huertos'
  }


  getAll(): any {
    return this.httpClient.get<any>(this.baseUrl).toPromise()
    /* .then(res => {
      return res
    })
    .catch(error => console.log(error)) */
  }


  getById(pId): any {
    return this.httpClient.get<any>(`${this.baseUrl}/${pId}`).toPromise()
    /* .then(res => {
      return res.id == pId;
    })
    .catch(error => console.log(error)) */
  }



}
