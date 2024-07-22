/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelStatut } from '../../models/entity-model-statut';

export interface CreatePropertyReferenceProcesverbalPut$UriList$Params {
  id: string;
      body: string
}

export function createPropertyReferenceProcesverbalPut$UriList(http: HttpClient, rootUrl: string, params: CreatePropertyReferenceProcesverbalPut$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelStatut>> {
  const rb = new RequestBuilder(rootUrl, createPropertyReferenceProcesverbalPut$UriList.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'text/uri-list');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelStatut>;
    })
  );
}

createPropertyReferenceProcesverbalPut$UriList.PATH = '/procesVerbals/{id}/statut';
