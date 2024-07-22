/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelSexe } from '../../models/entity-model-sexe';

export interface FollowPropertyReferenceDemandeurGet11$Params {
  id: string;
  propertyId: string;
}

export function followPropertyReferenceDemandeurGet11(http: HttpClient, rootUrl: string, params: FollowPropertyReferenceDemandeurGet11$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelSexe>> {
  const rb = new RequestBuilder(rootUrl, followPropertyReferenceDemandeurGet11.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
    rb.path('propertyId', params.propertyId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelSexe>;
    })
  );
}

followPropertyReferenceDemandeurGet11.PATH = '/demandeurs/{id}/sexe/{propertyId}';
