/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelSexe } from '../../models/entity-model-sexe';
import { SexeRequestBody } from '../../models/sexe-request-body';

export interface PutItemResourceSexePut$Params {
  id: string;
      body: SexeRequestBody
}

export function putItemResourceSexePut(http: HttpClient, rootUrl: string, params: PutItemResourceSexePut$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelSexe>> {
  const rb = new RequestBuilder(rootUrl, putItemResourceSexePut.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
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

putItemResourceSexePut.PATH = '/sexes/{id}';
