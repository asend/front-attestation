/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EmploiDto } from '../../models/emploi-dto';

export interface EmploiGetAll$Params {
}

export function emploiGetAll(http: HttpClient, rootUrl: string, params?: EmploiGetAll$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<EmploiDto>>> {
  const rb = new RequestBuilder(rootUrl, emploiGetAll.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<EmploiDto>>;
    })
  );
}

emploiGetAll.PATH = '/api/emplois';
