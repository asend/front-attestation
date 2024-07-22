/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelHandicap } from '../../models/entity-model-handicap';

export interface GetItemResourceHandicapGet$Params {
  id: string;
}

export function getItemResourceHandicapGet(http: HttpClient, rootUrl: string, params: GetItemResourceHandicapGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelHandicap>> {
  const rb = new RequestBuilder(rootUrl, getItemResourceHandicapGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelHandicap>;
    })
  );
}

getItemResourceHandicapGet.PATH = '/handicaps/{id}';
