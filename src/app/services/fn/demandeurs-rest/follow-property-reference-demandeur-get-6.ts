/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelImage } from '../../models/collection-model-image';

export interface FollowPropertyReferenceDemandeurGet6$Params {
  id: string;
  propertyId: string;
}

export function followPropertyReferenceDemandeurGet6(http: HttpClient, rootUrl: string, params: FollowPropertyReferenceDemandeurGet6$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelImage>> {
  const rb = new RequestBuilder(rootUrl, followPropertyReferenceDemandeurGet6.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
    rb.path('propertyId', params.propertyId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CollectionModelImage>;
    })
  );
}

followPropertyReferenceDemandeurGet6.PATH = '/demandeurs/{id}/images/{propertyId}';
