/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelEmploi } from '../../models/entity-model-emploi';

export interface GetItemResourceEmploiGet$Params {
  id: string;
}

export function getItemResourceEmploiGet(http: HttpClient, rootUrl: string, params: GetItemResourceEmploiGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelEmploi>> {
  const rb = new RequestBuilder(rootUrl, getItemResourceEmploiGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelEmploi>;
    })
  );
}

getItemResourceEmploiGet.PATH = '/emplois/{id}';
