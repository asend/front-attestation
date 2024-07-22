/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelHandicap } from '../../models/collection-model-handicap';

export interface FollowPropertyReferenceDemandeurGet51$Json$Params {
  id: string;
}

export function followPropertyReferenceDemandeurGet51$Json(http: HttpClient, rootUrl: string, params: FollowPropertyReferenceDemandeurGet51$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelHandicap>> {
  const rb = new RequestBuilder(rootUrl, followPropertyReferenceDemandeurGet51$Json.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CollectionModelHandicap>;
    })
  );
}

followPropertyReferenceDemandeurGet51$Json.PATH = '/demandeurs/{id}/handicaps';
