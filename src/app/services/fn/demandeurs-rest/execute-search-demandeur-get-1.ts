/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelDemandeur } from '../../models/entity-model-demandeur';

export interface ExecuteSearchDemandeurGet1$Params {
  username?: string;
}

export function executeSearchDemandeurGet1(http: HttpClient, rootUrl: string, params?: ExecuteSearchDemandeurGet1$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelDemandeur>> {
  const rb = new RequestBuilder(rootUrl, executeSearchDemandeurGet1.PATH, 'get');
  if (params) {
    rb.query('username', params.username, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelDemandeur>;
    })
  );
}

executeSearchDemandeurGet1.PATH = '/demandeurs/search/findDemandeurByUsername';
