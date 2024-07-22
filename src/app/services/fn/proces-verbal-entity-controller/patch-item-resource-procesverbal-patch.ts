/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelProcesVerbal } from '../../models/entity-model-proces-verbal';
import { ProcesVerbalRequestBody } from '../../models/proces-verbal-request-body';

export interface PatchItemResourceProcesverbalPatch$Params {
  id: string;
      body: ProcesVerbalRequestBody
}

export function patchItemResourceProcesverbalPatch(http: HttpClient, rootUrl: string, params: PatchItemResourceProcesverbalPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelProcesVerbal>> {
  const rb = new RequestBuilder(rootUrl, patchItemResourceProcesverbalPatch.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelProcesVerbal>;
    })
  );
}

patchItemResourceProcesverbalPatch.PATH = '/procesVerbals/{id}';
