/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProcesVerbal } from '../../models/proces-verbal';

export interface ProcesVerbalGetAll$Params {
}

export function procesVerbalGetAll(http: HttpClient, rootUrl: string, params?: ProcesVerbalGetAll$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ProcesVerbal>>> {
  const rb = new RequestBuilder(rootUrl, procesVerbalGetAll.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ProcesVerbal>>;
    })
  );
}

procesVerbalGetAll.PATH = '/api/procesverbals';
