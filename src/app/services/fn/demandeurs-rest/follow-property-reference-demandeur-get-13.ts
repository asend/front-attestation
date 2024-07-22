/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelStatut } from '../../models/entity-model-statut';

export interface FollowPropertyReferenceDemandeurGet13$Params {
  id: string;
  propertyId: string;
}

export function followPropertyReferenceDemandeurGet13(http: HttpClient, rootUrl: string, params: FollowPropertyReferenceDemandeurGet13$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelStatut>> {
  const rb = new RequestBuilder(rootUrl, followPropertyReferenceDemandeurGet13.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
    rb.path('propertyId', params.propertyId, {});
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

followPropertyReferenceDemandeurGet13.PATH = '/demandeurs/{id}/status/{propertyId}';
