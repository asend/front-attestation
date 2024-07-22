/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelSituationMatrimoiniale } from '../../models/entity-model-situation-matrimoiniale';

export interface CreatePropertyReferenceDemandeurPut11$UriList$Params {
  id: string;
      body: string
}

export function createPropertyReferenceDemandeurPut11$UriList(http: HttpClient, rootUrl: string, params: CreatePropertyReferenceDemandeurPut11$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelSituationMatrimoiniale>> {
  const rb = new RequestBuilder(rootUrl, createPropertyReferenceDemandeurPut11$UriList.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'text/uri-list');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelSituationMatrimoiniale>;
    })
  );
}

createPropertyReferenceDemandeurPut11$UriList.PATH = '/demandeurs/{id}/situation_matrimoiniale';
