import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {Image} from "../../services/models/image";

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  //apiURL: string = 'http://localhost:8888/api'
  apiURL: string = 'https://mfpspringboot.azurewebsites.net/api'


  constructor(private http: HttpClient) { }

  uploadImageFS(file: File, filename: string, idDemandeur : number): Observable<any>{
    const imageFormData = new FormData();
    imageFormData.append('image', file, filename);
    const url = `${this.apiURL + '/images/uploadFS'}/${idDemandeur}`;
    return this.http.post(url, imageFormData);
  }

  loadImage(id: number): Observable<Image> {
    const url = `${this.apiURL + '/images/getById'}/${id}`;
    return this.http.get<Image>(url);
  }

  supprimerImage(id : number) {
    const url = `${this.apiURL}/images/delete/${id}`;
    return this.http.delete(url);
  }

}
