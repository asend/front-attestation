/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EmploiRequestBody } from '../../models/emploi-request-body';
import { EntityModelEmploi } from '../../models/entity-model-emploi';

export interface PutItemResourceEmploiPut$Params {
  id: string;
      body: EmploiRequestBody
}

export function putItemResourceEmploiPut(http: HttpClient, rootUrl: string, params: PutItemResourceEmploiPut$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelEmploi>> {
  const rb = new RequestBuilder(rootUrl, putItemResourceEmploiPut.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
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

putItemResourceEmploiPut.PATH = '/emplois/{id}';
