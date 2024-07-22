/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelFormation } from '../../models/entity-model-formation';
import { FormationRequestBody } from '../../models/formation-request-body';

export interface PatchItemResourceFormationPatch$Params {
  id: string;
      body: FormationRequestBody
}

export function patchItemResourceFormationPatch(http: HttpClient, rootUrl: string, params: PatchItemResourceFormationPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelFormation>> {
  const rb = new RequestBuilder(rootUrl, patchItemResourceFormationPatch.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
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

patchItemResourceFormationPatch.PATH = '/formations/{id}';
