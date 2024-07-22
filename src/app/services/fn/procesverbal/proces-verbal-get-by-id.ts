/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProcesVerbal } from '../../models/proces-verbal';

export interface ProcesVerbalGetById$Params {
  id: number;
}

export function procesVerbalGetById(http: HttpClient, rootUrl: string, params: ProcesVerbalGetById$Params, context?: HttpContext): Observable<StrictHttpResponse<ProcesVerbal>> {
  const rb = new RequestBuilder(rootUrl, procesVerbalGetById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ProcesVerbal>;
    })
  );
}

procesVerbalGetById.PATH = '/api/procesverbals/{id}';
