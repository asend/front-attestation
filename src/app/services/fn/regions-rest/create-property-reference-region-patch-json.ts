/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelDepartement } from '../../models/collection-model-departement';
import { CollectionModelObject } from '../../models/collection-model-object';

export interface CreatePropertyReferenceRegionPatch$Json$Params {
  id: string;
      body: CollectionModelObject
}

export function createPropertyReferenceRegionPatch$Json(http: HttpClient, rootUrl: string, params: CreatePropertyReferenceRegionPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelDepartement>> {
  const rb = new RequestBuilder(rootUrl, createPropertyReferenceRegionPatch$Json.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/x-spring-data-compact+json');
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

createPropertyReferenceRegionPatch$Json.PATH = '/regions/{id}/departements';
