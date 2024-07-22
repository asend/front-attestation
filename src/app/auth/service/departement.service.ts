import { Injectable } from '@angular/core';
import {User} from "../model/user";
import {Observable} from "rxjs";
import {Departement} from "../../services/models/departement";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  //apiURL: string = 'http://localhost:8888/api';
  apiURL: string = 'https://mfpspringboot.azurewebsites.net/api';


  constructor(private http: HttpClient, private auth: AuthService) { }

  departements() : Observable<Departement[]>
  {
    let jwt = this.auth.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Departement[]>(this.apiURL+'/departements', {headers:httpHeaders});
  }
  // @ts-ignore
  getDepartement(): Observable<string>{
    let jwt = this.auth.getToken();
    jwt = "Bearer "+jwt;
  }
}
