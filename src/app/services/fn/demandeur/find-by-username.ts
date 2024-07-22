/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DemandeurDto } from '../../models/demandeur-dto';

export interface FindByUsername$Params {
  username: string;
}

export function findByUsername(http: HttpClient, rootUrl: string, params: FindByUsername$Params, context?: HttpContext): Observable<StrictHttpResponse<DemandeurDto>> {
  const rb = new RequestBuilder(rootUrl, findByUsername.PATH, 'get');
  if (params) {
    rb.path('username', params.username, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<DemandeurDto>;
    })
  );
}

findByUsername.PATH = '/api/demandeurs/demandeur-by-username/{username}';
