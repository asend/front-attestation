/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelHandicap } from '../../models/collection-model-handicap';
import { CollectionModelObject } from '../../models/collection-model-object';

export interface CreatePropertyReferenceDemandeurPut4$Json$Params {
  id: string;
      body: CollectionModelObject
}

export function createPropertyReferenceDemandeurPut4$Json(http: HttpClient, rootUrl: string, params: CreatePropertyReferenceDemandeurPut4$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelHandicap>> {
  const rb = new RequestBuilder(rootUrl, createPropertyReferenceDemandeurPut4$Json.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/x-spring-data-compact+json');
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

createPropertyReferenceDemandeurPut4$Json.PATH = '/demandeurs/{id}/handicaps';
