/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelFormation } from '../../models/entity-model-formation';

export interface FollowPropertyReferenceDemandeurGet4$Params {
  id: string;
  propertyId: string;
}

export function followPropertyReferenceDemandeurGet4(http: HttpClient, rootUrl: string, params: FollowPropertyReferenceDemandeurGet4$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelFormation>> {
  const rb = new RequestBuilder(rootUrl, followPropertyReferenceDemandeurGet4.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
    rb.path('propertyId', params.propertyId, {});
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

followPropertyReferenceDemandeurGet4.PATH = '/demandeurs/{id}/formation/{propertyId}';
