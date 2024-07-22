/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PagedModelEntityModelProcesVerbal } from '../../models/paged-model-entity-model-proces-verbal';

export interface GetCollectionResourceProcesverbalGet1$Json$Params {

/**
 * Zero-based page index (0..N)
 */
  page?: number;

/**
 * The size of the page to be returned
 */
  size?: number;

/**
 * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
 */
  sort?: Array<string>;
}

export function getCollectionResourceProcesverbalGet1$Json(http: HttpClient, rootUrl: string, params?: GetCollectionResourceProcesverbalGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PagedModelEntityModelProcesVerbal>> {
  const rb = new RequestBuilder(rootUrl, getCollectionResourceProcesverbalGet1$Json.PATH, 'get');
  if (params) {
    rb.query('page', params.page, {});
    rb.query('size', params.size, {});
    rb.query('sort', params.sort, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/x-spring-data-compact+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PagedModelEntityModelProcesVerbal>;
    })
  );
}

getCollectionResourceProcesverbalGet1$Json.PATH = '/procesVerbals';
