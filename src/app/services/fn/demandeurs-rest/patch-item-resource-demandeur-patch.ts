/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DemandeurRequestBody } from '../../models/demandeur-request-body';
import { EntityModelDemandeur } from '../../models/entity-model-demandeur';

export interface PatchItemResourceDemandeurPatch$Params {
  id: string;
      body: DemandeurRequestBody
}

export function patchItemResourceDemandeurPatch(http: HttpClient, rootUrl: string, params: PatchItemResourceDemandeurPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelDemandeur>> {
  const rb = new RequestBuilder(rootUrl, patchItemResourceDemandeurPatch.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
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

patchItemResourceDemandeurPatch.PATH = '/demandeurs/{id}';
