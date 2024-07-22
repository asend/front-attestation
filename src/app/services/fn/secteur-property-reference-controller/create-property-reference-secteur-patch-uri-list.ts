/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelEmploi } from '../../models/collection-model-emploi';

export interface CreatePropertyReferenceSecteurPatch$UriList$Params {
  id: string;
      body: string
}

export function createPropertyReferenceSecteurPatch$UriList(http: HttpClient, rootUrl: string, params: CreatePropertyReferenceSecteurPatch$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelEmploi>> {
  const rb = new RequestBuilder(rootUrl, createPropertyReferenceSecteurPatch$UriList.PATH, 'patch');
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

createPropertyReferenceSecteurPatch$UriList.PATH = '/secteurs/{id}/emplois';
