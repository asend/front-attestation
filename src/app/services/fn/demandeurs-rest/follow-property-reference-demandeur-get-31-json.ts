/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelEmploi } from '../../models/collection-model-emploi';

export interface FollowPropertyReferenceDemandeurGet31$Json$Params {
  id: string;
}

export function followPropertyReferenceDemandeurGet31$Json(http: HttpClient, rootUrl: string, params: FollowPropertyReferenceDemandeurGet31$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelEmploi>> {
  const rb = new RequestBuilder(rootUrl, followPropertyReferenceDemandeurGet31$Json.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CollectionModelEmploi>;
    })
  );
}

followPropertyReferenceDemandeurGet31$Json.PATH = '/demandeurs/{id}/emplois';
