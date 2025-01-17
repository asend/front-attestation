/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Sexe } from '../../models/sexe';

export interface SexeGetById$Params {
  id: number;
}

export function sexeGetById(http: HttpClient, rootUrl: string, params: SexeGetById$Params, context?: HttpContext): Observable<StrictHttpResponse<Sexe>> {
  const rb = new RequestBuilder(rootUrl, sexeGetById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Sexe>;
    })
  );
}

sexeGetById.PATH = '/api/sexes/{id}';
