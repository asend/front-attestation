/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelStatut } from '../../models/entity-model-statut';
import { StatutRequestBody } from '../../models/statut-request-body';

export interface PutItemResourceStatutPut$Params {
  id: string;
      body: StatutRequestBody
}

export function putItemResourceStatutPut(http: HttpClient, rootUrl: string, params: PutItemResourceStatutPut$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelStatut>> {
  const rb = new RequestBuilder(rootUrl, putItemResourceStatutPut.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelStatut>;
    })
  );
}

putItemResourceStatutPut.PATH = '/statuts/{id}';
