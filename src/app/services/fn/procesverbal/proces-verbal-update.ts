/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProcesVerbal } from '../../models/proces-verbal';

export interface ProcesVerbalUpdate$Params {
      body: ProcesVerbal
}

export function procesVerbalUpdate(http: HttpClient, rootUrl: string, params: ProcesVerbalUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<ProcesVerbal>> {
  const rb = new RequestBuilder(rootUrl, procesVerbalUpdate.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/json');
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

procesVerbalUpdate.PATH = '/api/procesverbals/proces-verbal-update';
