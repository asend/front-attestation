/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelRegion } from '../../models/entity-model-region';

export interface FollowPropertyReferenceDemandeurGet8$Params {
  id: string;
  propertyId: string;
}

export function followPropertyReferenceDemandeurGet8(http: HttpClient, rootUrl: string, params: FollowPropertyReferenceDemandeurGet8$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelRegion>> {
  const rb = new RequestBuilder(rootUrl, followPropertyReferenceDemandeurGet8.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
    rb.path('propertyId', params.propertyId, {});
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

followPropertyReferenceDemandeurGet8.PATH = '/demandeurs/{id}/region_naissance_id/{propertyId}';
