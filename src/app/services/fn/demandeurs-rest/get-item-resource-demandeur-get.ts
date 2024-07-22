/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelDemandeur } from '../../models/entity-model-demandeur';

export interface GetItemResourceDemandeurGet$Params {
  id: string;
}

export function getItemResourceDemandeurGet(http: HttpClient, rootUrl: string, params: GetItemResourceDemandeurGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelDemandeur>> {
  const rb = new RequestBuilder(rootUrl, getItemResourceDemandeurGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelDemandeur>;
    })
  );
}

getItemResourceDemandeurGet.PATH = '/demandeurs/{id}';
