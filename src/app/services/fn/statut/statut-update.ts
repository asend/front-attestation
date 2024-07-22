/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Statut } from '../../models/statut';

export interface StatutUpdate$Params {
      body: Statut
}

export function statutUpdate(http: HttpClient, rootUrl: string, params: StatutUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<Statut>> {
  const rb = new RequestBuilder(rootUrl, statutUpdate.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/json');
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

statutUpdate.PATH = '/api/statuts/Statut-update';
