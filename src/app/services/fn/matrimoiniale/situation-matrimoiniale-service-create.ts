/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SituationMatrimoiniale } from '../../models/situation-matrimoiniale';

export interface SituationMatrimoinialeServiceCreate$Params {
      body: SituationMatrimoiniale
}

export function situationMatrimoinialeServiceCreate(http: HttpClient, rootUrl: string, params: SituationMatrimoinialeServiceCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<SituationMatrimoiniale>> {
  const rb = new RequestBuilder(rootUrl, situationMatrimoinialeServiceCreate.PATH, 'post');
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

situationMatrimoinialeServiceCreate.PATH = '/api/matrimoiniales';
