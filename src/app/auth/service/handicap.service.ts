import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Handicap } from 'src/app/services/models';

@Injectable({
  providedIn: 'root'
})
export class HandicapService {
  //apiURL: string = 'http://localhost:8888/api'
  apiURL: string = 'https://mfpspringboot.azurewebsites.net/api'
  constructor(private http: HttpClient) { }

  getHandicap(id: number){
    const url = `${this.apiURL + '/handicaps/'}${id}`;
    return this.http.get<Handicap>(url);
  }

  handicapsGetAll(){
    const url = this.apiURL + '/handicaps';
    return this.http.get<Handicap[]>(url);
  }
}
