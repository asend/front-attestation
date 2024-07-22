/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelHandicap } from '../../models/entity-model-handicap';
import { HandicapRequestBody } from '../../models/handicap-request-body';

export interface PatchItemResourceHandicapPatch$Params {
  id: string;
      body: HandicapRequestBody
}

export function patchItemResourceHandicapPatch(http: HttpClient, rootUrl: string, params: PatchItemResourceHandicapPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelHandicap>> {
  const rb = new RequestBuilder(rootUrl, patchItemResourceHandicapPatch.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelHandicap>;
    })
  );
}

patchItemResourceHandicapPatch.PATH = '/handicaps/{id}';
