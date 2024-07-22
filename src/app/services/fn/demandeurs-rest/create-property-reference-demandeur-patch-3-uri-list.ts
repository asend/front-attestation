/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelFormation } from '../../models/entity-model-formation';

export interface CreatePropertyReferenceDemandeurPatch3$UriList$Params {
  id: string;
      body: string
}

export function createPropertyReferenceDemandeurPatch3$UriList(http: HttpClient, rootUrl: string, params: CreatePropertyReferenceDemandeurPatch3$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelFormation>> {
  const rb = new RequestBuilder(rootUrl, createPropertyReferenceDemandeurPatch3$UriList.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'text/uri-list');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelFormation>;
    })
  );
}

createPropertyReferenceDemandeurPatch3$UriList.PATH = '/demandeurs/{id}/formation';
