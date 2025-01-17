/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Departement } from '../../models/departement';

export interface DepartementGetAll$Params {
}

export function departementGetAll(http: HttpClient, rootUrl: string, params?: DepartementGetAll$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Departement>>> {
  const rb = new RequestBuilder(rootUrl, departementGetAll.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Departement>>;
    })
  );
}

departementGetAll.PATH = '/api/departements';
