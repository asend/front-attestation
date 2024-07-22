/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DepartementRequestBody } from '../../models/departement-request-body';
import { EntityModelDepartement } from '../../models/entity-model-departement';

export interface PutItemResourceDepartementPut$Params {
  id: string;
      body: DepartementRequestBody
}

export function putItemResourceDepartementPut(http: HttpClient, rootUrl: string, params: PutItemResourceDepartementPut$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelDepartement>> {
  const rb = new RequestBuilder(rootUrl, putItemResourceDepartementPut.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelDepartement>;
    })
  );
}

putItemResourceDepartementPut.PATH = '/departements/{id}';
