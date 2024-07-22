/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Region } from '../../models/region';

export interface RegionGetAll$Params {
}

export function regionGetAll(http: HttpClient, rootUrl: string, params?: RegionGetAll$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Region>>> {
  const rb = new RequestBuilder(rootUrl, regionGetAll.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Region>>;
    })
  );
}

regionGetAll.PATH = '/api/regions';
