/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelSituationMatrimoiniale } from '../../models/entity-model-situation-matrimoiniale';
import { SituationMatrimoinialeRequestBody } from '../../models/situation-matrimoiniale-request-body';

export interface PatchItemResourceSituationmatrimoinialePatch$Params {
  id: string;
      body: SituationMatrimoinialeRequestBody
}

export function patchItemResourceSituationmatrimoinialePatch(http: HttpClient, rootUrl: string, params: PatchItemResourceSituationmatrimoinialePatch$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelSituationMatrimoiniale>> {
  const rb = new RequestBuilder(rootUrl, patchItemResourceSituationmatrimoinialePatch.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelSituationMatrimoiniale>;
    })
  );
}

patchItemResourceSituationmatrimoinialePatch.PATH = '/matrimoiniales/{id}';
