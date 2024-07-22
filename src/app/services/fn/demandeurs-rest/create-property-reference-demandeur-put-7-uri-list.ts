/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelRegion } from '../../models/entity-model-region';

export interface CreatePropertyReferenceDemandeurPut7$UriList$Params {
  id: string;
      body: string
}

export function createPropertyReferenceDemandeurPut7$UriList(http: HttpClient, rootUrl: string, params: CreatePropertyReferenceDemandeurPut7$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelRegion>> {
  const rb = new RequestBuilder(rootUrl, createPropertyReferenceDemandeurPut7$UriList.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'text/uri-list');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelRegion>;
    })
  );
}

createPropertyReferenceDemandeurPut7$UriList.PATH = '/demandeurs/{id}/region_naissance_id';
