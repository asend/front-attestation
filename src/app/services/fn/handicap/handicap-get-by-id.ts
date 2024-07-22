/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Handicap } from '../../models/handicap';

export interface HandicapGetById$Params {
  id: number;
}

export function handicapGetById(http: HttpClient, rootUrl: string, params: HandicapGetById$Params, context?: HttpContext): Observable<StrictHttpResponse<Handicap>> {
  const rb = new RequestBuilder(rootUrl, handicapGetById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Handicap>;
    })
  );
}

handicapGetById.PATH = '/api/handicaps/{id}';
