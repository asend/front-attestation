import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Demandeur } from 'src/app/services/models';

@Injectable({
  providedIn: 'root'
})
export class DemandeurService {
  //apiURL: string = 'http://localhost:8888/api';
  apiURL: string = 'https://mfpspringboot.azurewebsites.net/api';
  constructor(private http: HttpClient) { }

  getAllDemandeur(page: number, size: number) : Observable<any>
  {
    return this.http.get<any>(this.apiURL+'/demandeurs/all?page='+page+'&size='+size);
  }
}
