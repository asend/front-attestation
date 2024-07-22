/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelEmploi } from '../../models/collection-model-emploi';

export interface CreatePropertyReferenceDemandeurPatch2$UriList$Params {
  id: string;
      body: string
}

export function createPropertyReferenceDemandeurPatch2$UriList(http: HttpClient, rootUrl: string, params: CreatePropertyReferenceDemandeurPatch2$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelEmploi>> {
  const rb = new RequestBuilder(rootUrl, createPropertyReferenceDemandeurPatch2$UriList.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'text/uri-list');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CollectionModelEmploi>;
    })
  );
}

createPropertyReferenceDemandeurPatch2$UriList.PATH = '/demandeurs/{id}/emplois';
