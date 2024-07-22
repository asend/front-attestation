/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SituationMatrimoiniale } from '../../models/situation-matrimoiniale';

export interface SituationMatrimoinialeServicesGetAll$Params {
}

export function situationMatrimoinialeServicesGetAll(http: HttpClient, rootUrl: string, params?: SituationMatrimoinialeServicesGetAll$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SituationMatrimoiniale>>> {
  const rb = new RequestBuilder(rootUrl, situationMatrimoinialeServicesGetAll.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<SituationMatrimoiniale>>;
    })
  );
}

situationMatrimoinialeServicesGetAll.PATH = '/api/matrimoiniales';
