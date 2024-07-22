/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Demandeur } from '../../models/demandeur';

export interface DemandeurGetAll$Params {
}

export function demandeurGetAll(http: HttpClient, rootUrl: string, params?: DemandeurGetAll$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Demandeur>>> {
  const rb = new RequestBuilder(rootUrl, demandeurGetAll.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Demandeur>>;
    })
  );
}

demandeurGetAll.PATH = '/api/demandeurs';
