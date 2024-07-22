/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageDemandeurDto } from '../../models/page-demandeur-dto';

export interface GetAll$Params {
  page: number;
  size: number;
}

export function getAll(http: HttpClient, rootUrl: string, params: GetAll$Params, context?: HttpContext): Observable<StrictHttpResponse<PageDemandeurDto>> {
  const rb = new RequestBuilder(rootUrl, getAll.PATH, 'get');
  if (params) {
    rb.query('page', params.page, {});
    rb.query('size', params.size, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageDemandeurDto>;
    })
  );
}

getAll.PATH = '/api/demandeurs/all';
