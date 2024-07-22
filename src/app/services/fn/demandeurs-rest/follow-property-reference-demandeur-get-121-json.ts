/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelSituationMatrimoiniale } from '../../models/entity-model-situation-matrimoiniale';

export interface FollowPropertyReferenceDemandeurGet121$Json$Params {
  id: string;
}

export function followPropertyReferenceDemandeurGet121$Json(http: HttpClient, rootUrl: string, params: FollowPropertyReferenceDemandeurGet121$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelSituationMatrimoiniale>> {
  const rb = new RequestBuilder(rootUrl, followPropertyReferenceDemandeurGet121$Json.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

followPropertyReferenceDemandeurGet121$Json.PATH = '/demandeurs/{id}/situation_matrimoiniale';
