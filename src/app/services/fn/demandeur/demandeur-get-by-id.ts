/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DemandeurDto } from '../../models/demandeur-dto';

export interface DemandeurGetById$Params {
  id: number;
}

export function demandeurGetById(http: HttpClient, rootUrl: string, params: DemandeurGetById$Params, context?: HttpContext): Observable<StrictHttpResponse<DemandeurDto>> {
  const rb = new RequestBuilder(rootUrl, demandeurGetById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

demandeurGetById.PATH = '/api/demandeurs/{id}';
