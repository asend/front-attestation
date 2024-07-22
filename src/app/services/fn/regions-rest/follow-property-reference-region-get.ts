/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelDepartement } from '../../models/collection-model-departement';

export interface FollowPropertyReferenceRegionGet$Params {
  id: string;
  propertyId: string;
}

export function followPropertyReferenceRegionGet(http: HttpClient, rootUrl: string, params: FollowPropertyReferenceRegionGet$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelDepartement>> {
  const rb = new RequestBuilder(rootUrl, followPropertyReferenceRegionGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
    rb.path('propertyId', params.propertyId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CollectionModelDepartement>;
    })
  );
}

followPropertyReferenceRegionGet.PATH = '/regions/{id}/departements/{propertyId}';
