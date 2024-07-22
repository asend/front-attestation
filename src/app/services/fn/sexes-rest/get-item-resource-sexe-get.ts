/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelSexe } from '../../models/entity-model-sexe';

export interface GetItemResourceSexeGet$Params {
  id: string;
}

export function getItemResourceSexeGet(http: HttpClient, rootUrl: string, params: GetItemResourceSexeGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelSexe>> {
  const rb = new RequestBuilder(rootUrl, getItemResourceSexeGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

getItemResourceSexeGet.PATH = '/sexes/{id}';
