/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelDepartement } from '../../models/collection-model-departement';

export interface CreatePropertyReferenceRegionPatch$UriList$Params {
  id: string;
      body: string
}

export function createPropertyReferenceRegionPatch$UriList(http: HttpClient, rootUrl: string, params: CreatePropertyReferenceRegionPatch$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelDepartement>> {
  const rb = new RequestBuilder(rootUrl, createPropertyReferenceRegionPatch$UriList.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'text/uri-list');
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

createPropertyReferenceRegionPatch$UriList.PATH = '/regions/{id}/departements';
