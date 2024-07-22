/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelRegion } from '../../models/entity-model-region';

export interface FollowPropertyReferenceDemandeurGet81$Json$Params {
  id: string;
}

export function followPropertyReferenceDemandeurGet81$Json(http: HttpClient, rootUrl: string, params: FollowPropertyReferenceDemandeurGet81$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelRegion>> {
  const rb = new RequestBuilder(rootUrl, followPropertyReferenceDemandeurGet81$Json.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

followPropertyReferenceDemandeurGet81$Json.PATH = '/demandeurs/{id}/region_naissance_id';
