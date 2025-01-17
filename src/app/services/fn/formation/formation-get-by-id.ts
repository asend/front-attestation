/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Formation } from '../../models/formation';

export interface FormationGetById$Params {
  id: number;
}

export function formationGetById(http: HttpClient, rootUrl: string, params: FormationGetById$Params, context?: HttpContext): Observable<StrictHttpResponse<Formation>> {
  const rb = new RequestBuilder(rootUrl, formationGetById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Formation>;
    })
  );
}

formationGetById.PATH = '/api/formations/{id}';
