/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelProcesVerbal } from '../../models/entity-model-proces-verbal';

export interface CreatePropertyReferenceDemandeurPatch6$UriList$Params {
  id: string;
      body: string
}

export function createPropertyReferenceDemandeurPatch6$UriList(http: HttpClient, rootUrl: string, params: CreatePropertyReferenceDemandeurPatch6$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelProcesVerbal>> {
  const rb = new RequestBuilder(rootUrl, createPropertyReferenceDemandeurPatch6$UriList.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'text/uri-list');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelProcesVerbal>;
    })
  );
}

createPropertyReferenceDemandeurPatch6$UriList.PATH = '/demandeurs/{id}/proces_verbal';
