/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelProcesVerbal } from '../../models/entity-model-proces-verbal';

export interface FollowPropertyReferenceDemandeurGet71$Json$Params {
  id: string;
}

export function followPropertyReferenceDemandeurGet71$Json(http: HttpClient, rootUrl: string, params: FollowPropertyReferenceDemandeurGet71$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelProcesVerbal>> {
  const rb = new RequestBuilder(rootUrl, followPropertyReferenceDemandeurGet71$Json.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

followPropertyReferenceDemandeurGet71$Json.PATH = '/demandeurs/{id}/proces_verbal';
