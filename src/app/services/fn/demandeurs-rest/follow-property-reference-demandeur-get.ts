/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelDepartement } from '../../models/entity-model-departement';

export interface FollowPropertyReferenceDemandeurGet$Params {
  id: string;
  propertyId: string;
}

export function followPropertyReferenceDemandeurGet(http: HttpClient, rootUrl: string, params: FollowPropertyReferenceDemandeurGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelDepartement>> {
  const rb = new RequestBuilder(rootUrl, followPropertyReferenceDemandeurGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
    rb.path('propertyId', params.propertyId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelDepartement>;
    })
  );
}

followPropertyReferenceDemandeurGet.PATH = '/demandeurs/{id}/departement_naissance_id/{propertyId}';
