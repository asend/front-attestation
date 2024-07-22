/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelImage } from '../../models/collection-model-image';

export interface CreatePropertyReferenceDemandeurPut5$UriList$Params {
  id: string;
      body: string
}

export function createPropertyReferenceDemandeurPut5$UriList(http: HttpClient, rootUrl: string, params: CreatePropertyReferenceDemandeurPut5$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelImage>> {
  const rb = new RequestBuilder(rootUrl, createPropertyReferenceDemandeurPut5$UriList.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'text/uri-list');
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

createPropertyReferenceDemandeurPut5$UriList.PATH = '/demandeurs/{id}/images';
