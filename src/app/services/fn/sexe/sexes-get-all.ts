/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Sexe } from '../../models/sexe';

export interface SexesGetAll$Params {
}

export function sexesGetAll(http: HttpClient, rootUrl: string, params?: SexesGetAll$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Sexe>>> {
  const rb = new RequestBuilder(rootUrl, sexesGetAll.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Sexe>>;
    })
  );
}

sexesGetAll.PATH = '/api/sexes';
