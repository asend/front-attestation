/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SituationMatrimoiniale } from '../../models/situation-matrimoiniale';

export interface SituationMatrimoinialeServiceUpdate$Params {
      body: SituationMatrimoiniale
}

export function situationMatrimoinialeServiceUpdate(http: HttpClient, rootUrl: string, params: SituationMatrimoinialeServiceUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<SituationMatrimoiniale>> {
  const rb = new RequestBuilder(rootUrl, situationMatrimoinialeServiceUpdate.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SituationMatrimoiniale>;
    })
  );
}

situationMatrimoinialeServiceUpdate.PATH = '/api/matrimoiniales/situation-update';
