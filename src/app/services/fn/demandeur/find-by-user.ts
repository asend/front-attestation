/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Demandeur } from '../../models/demandeur';

export interface FindByUser$Params {
  id: number;
}

export function findByUser(http: HttpClient, rootUrl: string, params: FindByUser$Params, context?: HttpContext): Observable<StrictHttpResponse<Demandeur>> {
  const rb = new RequestBuilder(rootUrl, findByUser.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Demandeur>;
    })
  );
}

findByUser.PATH = '/api/demandeurs/by-user/{id}';
