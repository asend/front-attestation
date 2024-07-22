/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelImage } from '../../models/collection-model-image';
import { CollectionModelObject } from '../../models/collection-model-object';

export interface CreatePropertyReferenceDemandeurPatch5$Json$Params {
  id: string;
      body: CollectionModelObject
}

export function createPropertyReferenceDemandeurPatch5$Json(http: HttpClient, rootUrl: string, params: CreatePropertyReferenceDemandeurPatch5$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelImage>> {
  const rb = new RequestBuilder(rootUrl, createPropertyReferenceDemandeurPatch5$Json.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/x-spring-data-compact+json');
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

createPropertyReferenceDemandeurPatch5$Json.PATH = '/demandeurs/{id}/images';
