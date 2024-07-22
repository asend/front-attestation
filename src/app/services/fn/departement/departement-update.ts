/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Departement } from '../../models/departement';

export interface DepartementUpdate$Params {
      body: Departement
}

export function departementUpdate(http: HttpClient, rootUrl: string, params: DepartementUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<Departement>> {
  const rb = new RequestBuilder(rootUrl, departementUpdate.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Departement>;
    })
  );
}

departementUpdate.PATH = '/api/departements/departement-update';
