/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelProcesVerbal } from '../../models/entity-model-proces-verbal';

export interface FollowPropertyReferenceDemandeurGet7$Params {
  id: string;
  propertyId: string;
}

export function followPropertyReferenceDemandeurGet7(http: HttpClient, rootUrl: string, params: FollowPropertyReferenceDemandeurGet7$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelProcesVerbal>> {
  const rb = new RequestBuilder(rootUrl, followPropertyReferenceDemandeurGet7.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
    rb.path('propertyId', params.propertyId, {});
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

followPropertyReferenceDemandeurGet7.PATH = '/demandeurs/{id}/proces_verbal/{propertyId}';
