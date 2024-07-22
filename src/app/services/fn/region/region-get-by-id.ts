/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Region } from '../../models/region';

export interface RegionGetById$Params {
  id: number;
}

export function regionGetById(http: HttpClient, rootUrl: string, params: RegionGetById$Params, context?: HttpContext): Observable<StrictHttpResponse<Region>> {
  const rb = new RequestBuilder(rootUrl, regionGetById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Region>;
    })
  );
}

regionGetById.PATH = '/api/regions/{id}';
