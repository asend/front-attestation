/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelSexe } from '../../models/entity-model-sexe';

export interface CreatePropertyReferenceDemandeurPatch10$UriList$Params {
  id: string;
      body: string
}

export function createPropertyReferenceDemandeurPatch10$UriList(http: HttpClient, rootUrl: string, params: CreatePropertyReferenceDemandeurPatch10$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelSexe>> {
  const rb = new RequestBuilder(rootUrl, createPropertyReferenceDemandeurPatch10$UriList.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'text/uri-list');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelSexe>;
    })
  );
}

createPropertyReferenceDemandeurPatch10$UriList.PATH = '/demandeurs/{id}/sexe';
