/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelObject } from '../../models/collection-model-object';
import { EntityModelFormation } from '../../models/entity-model-formation';

export interface CreatePropertyReferenceDemandeurPatch3$Json$Params {
  id: string;
      body: CollectionModelObject
}

export function createPropertyReferenceDemandeurPatch3$Json(http: HttpClient, rootUrl: string, params: CreatePropertyReferenceDemandeurPatch3$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelFormation>> {
  const rb = new RequestBuilder(rootUrl, createPropertyReferenceDemandeurPatch3$Json.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/x-spring-data-compact+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelFormation>;
    })
  );
}

createPropertyReferenceDemandeurPatch3$Json.PATH = '/demandeurs/{id}/formation';
