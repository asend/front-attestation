/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Statut } from '../../models/statut';

export interface StatutGetById$Params {
  id: number;
}

export function statutGetById(http: HttpClient, rootUrl: string, params: StatutGetById$Params, context?: HttpContext): Observable<StrictHttpResponse<Statut>> {
  const rb = new RequestBuilder(rootUrl, statutGetById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Statut>;
    })
  );
}

statutGetById.PATH = '/api/statuts/{id}';
