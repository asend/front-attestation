/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Handicap } from '../../models/handicap';

export interface HandicapsGetAll$Params {
}

export function handicapsGetAll(http: HttpClient, rootUrl: string, params?: HandicapsGetAll$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Handicap>>> {
  const rb = new RequestBuilder(rootUrl, handicapsGetAll.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Handicap>>;
    })
  );
}

handicapsGetAll.PATH = '/api/handicaps';
