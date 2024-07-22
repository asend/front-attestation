/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelHandicap } from '../../models/collection-model-handicap';

export interface FollowPropertyReferenceDemandeurGet5$Params {
  id: string;
  propertyId: string;
}

export function followPropertyReferenceDemandeurGet5(http: HttpClient, rootUrl: string, params: FollowPropertyReferenceDemandeurGet5$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelHandicap>> {
  const rb = new RequestBuilder(rootUrl, followPropertyReferenceDemandeurGet5.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
    rb.path('propertyId', params.propertyId, {});
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

followPropertyReferenceDemandeurGet5.PATH = '/demandeurs/{id}/handicaps/{propertyId}';
