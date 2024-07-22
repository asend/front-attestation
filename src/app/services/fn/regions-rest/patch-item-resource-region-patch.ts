/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelRegion } from '../../models/entity-model-region';
import { RegionRequestBody } from '../../models/region-request-body';

export interface PatchItemResourceRegionPatch$Params {
  id: string;
      body: RegionRequestBody
}

export function patchItemResourceRegionPatch(http: HttpClient, rootUrl: string, params: PatchItemResourceRegionPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelRegion>> {
  const rb = new RequestBuilder(rootUrl, patchItemResourceRegionPatch.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelRegion>;
    })
  );
}

patchItemResourceRegionPatch.PATH = '/regions/{id}';
